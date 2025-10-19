import React, { Component } from 'react'
import $ from 'jquery';
const Parser = require('expr-eval').Parser;

const parser = new Parser({
  operators: {
    add: true,
    concatenate: true,
    conditional: true,
    divide: true,
    factorial: true,
    multiply: true,
    power: true,
    remainder: true,
    subtract: true,
    logical: false,
    comparison: false,
    'in': false,
    assignment: true
  }
});

export class Calc extends Component {
  constructor() {
    super();
    this.cursor = "";
    this.terminal_rows = 2;
    this.prev_commands = [];
    this.commands_index = -1;
    this.variables = {};
    this.state = { terminal: [] };
  }

  componentDidMount() {
    this.reStartTerminal();
  }

  componentDidUpdate() {
    clearInterval(this.cursor);
    this.startCursor(this.terminal_rows - 2);
  }

  componentWillUnmount() {
    clearInterval(this.cursor);
  }

  reStartTerminal = () => {
    clearInterval(this.cursor);
    $('#calculator-body').empty();
    this.appendTerminalRow();
  }

  appendTerminalRow = () => {
    let terminal = this.state.terminal;
    terminal.push(this.terminalRow(this.terminal_rows));
    this.setState({ terminal });
    this.terminal_rows += 2;
  }

  terminalRow = (id) => {
    return (
      <React.Fragment key={id}>
        <div className="flex w-full items-center text-[14px] mt-1">
          <div className="text-neon-green pr-2">→</div>
          <div id="cmd" onClick={this.focusCursor} className="relative flex-1 overflow-hidden">
            <span id={`show-calculator-${id}`} className="text-white tracking-wide"></span>
            <div id={`cursor-${id}`} className="ml-[1px] inline-block w-[6px] h-[16px] bg-neon-green shadow-[0_0_5px_#39ff14] animate-blink"></div>
            <input id={`calculator-input-${id}`} data-row-id={id} onKeyDown={this.checkKey} onBlur={this.unFocusCursor}
              className="absolute top-0 left-0 w-full opacity-0 outline-none bg-transparent" spellCheck={false}
              autoFocus={true} autoComplete="off" type="text" />
          </div>
        </div>
        <div id={`row-calculator-result-${id}`} className="my-2 text-cyan-300 font-semibold tracking-wide"></div>
      </React.Fragment>
    );
  }

  focusCursor = (e) => {
    clearInterval(this.cursor);
    this.startCursor($(e.target).data("row-id"));
  }

  unFocusCursor = (e) => {
    this.stopCursor($(e.target).data("row-id"));
  }

  startCursor = (id) => {
    clearInterval(this.cursor);
    $(`input#calculator-input-${id}`).trigger("focus");
    $(`input#calculator-input-${id}`).on("input", function () {
      $(`#cmd span#show-calculator-${id}`).text($(this).val());
    });
    this.cursor = window.setInterval(function () {
      if ($(`#cursor-${id}`).css('visibility') === 'visible') {
        $(`#cursor-${id}`).css({ visibility: 'hidden' });
      } else {
        $(`#cursor-${id}`).css({ visibility: 'visible' });
      }
    }, 500);
  }

  stopCursor = (id) => {
    clearInterval(this.cursor);
    $(`#cursor-${id}`).css({ visibility: 'visible' });
  }

  removeCursor = (id) => {
    this.stopCursor(id);
    $(`#cursor-${id}`).css({ display: 'none' });
  }

  clearInput = (id) => {
    $(`input#calculator-input-${id}`).trigger("blur");
  }

  checkKey = (e) => {
    if (e.key === "Enter") {
      let terminal_row_id = $(e.target).data("row-id");
      let command = $(`input#calculator-input-${terminal_row_id}`).val().trim();
      if (command.length !== 0) {
        this.removeCursor(terminal_row_id);
        this.handleCommands(command, terminal_row_id);
      } else return;
      this.prev_commands.push(command);
      this.commands_index = this.prev_commands.length - 1;
      this.clearInput(terminal_row_id);
    }
    else if (e.key === "ArrowUp") {
      let prev_command;
      if (this.commands_index <= -1) prev_command = "";
      else prev_command = this.prev_commands[this.commands_index];
      let terminal_row_id = $(e.target).data("row-id");
      $(`input#calculator-input-${terminal_row_id}`).val(prev_command);
      $(`#show-calculator-${terminal_row_id}`).text(prev_command);
      this.commands_index--;
    }
    else if (e.key === "ArrowDown") {
      let prev_command;
      if (this.commands_index >= this.prev_commands.length) return;
      if (this.commands_index <= -1) this.commands_index = 0;
      if (this.commands_index === this.prev_commands.length) prev_command = "";
      else prev_command = this.prev_commands[this.commands_index];
      let terminal_row_id = $(e.target).data("row-id");
      $(`input#calculator-input-${terminal_row_id}`).val(prev_command);
      $(`#show-calculator-${terminal_row_id}`).text(prev_command);
      this.commands_index++;
    }
  }

  closeTerminal = () => {
    $("#close-calc").trigger('click');
  }

  handleCommands = (command, rowId) => {
    let words = command.split(' ').filter(Boolean);
    let main = words[0];
    let result = "";
    switch (main) {
      case "clear":
        this.reStartTerminal();
        return;
      case "exit":
        this.closeTerminal();
        return;
      case "help":
        result = `<div class='text-cyan-300'>Available Commands:<br/>Operators: + - * / % ^<br/>Functions: sin(x), cos(x), tan(x), log(x), sqrt(x), abs(x)<br/>Constants: PI, E<br/>Use x=5 to assign variables.<br/><br/><span class='text-neon-green'>Type "clear" to reset, "exit" to close.</span></div>`;
        break;
      default:
        result = this.evaluteExp(command);
    }
    document.getElementById(`row-calculator-result-${rowId}`).innerHTML = result;
    this.appendTerminalRow();
  }

  evaluteExp = (command) => {
    let result = "";
    let expr;
    try {
      expr = parser.parse(command)
      try {
        result = parser.evaluate(command, this.variables)
        if (expr.tokens.length === 2 && expr.tokens[2].type === "IOP2")
          this.variables[expr.variables()[0]] = result
      }
      catch (e) { result = e.message; }
    }
    catch (e) { result = "⚠️ Invalid Expression"; }
    return `<span class='text-neon-green'>${result}</span>`;
  }

  xss(str) {
    if (!str) return;
    return str.split('').map(char => {
      switch (char) {
        case '&': return '&amp';
        case '<': return '&lt';
        case '>': return '&gt';
        case '"': return '&quot';
        case "'": return '&#x27';
        case '/': return '&#x2F';
        default: return char;
      }
    }).join('');
  }

  render() {
    return (
      <div className="h-full w-full bg-[#0d0d0d] text-gray-300 p-3 rounded-xl shadow-[0_0_20px_#00ffff33] font-mono overflow-y-auto">
        <div className="text-neon-green text-lg font-bold mb-1">C-Terminal Calculator v2.12.7.2</div>
        <div className="text-gray-400 text-sm mb-1">Open-source terminal calc engine</div>
        <div className="text-gray-500 text-xs mb-3">[Type <span className="text-cyan-400">"help"</span> for info, <span className="text-red-400">"exit"</span> to close]</div>
        <div id="calculator-body" className="text-sm leading-6 tracking-wide">
          {this.state.terminal}
        </div>
        <style>{`
          .text-neon-green { color: #39ff14; text-shadow: 0 0 8px #39ff14; }
          .animate-blink { animation: blink 1s step-end infinite alternate; }
          @keyframes blink { 50% { opacity: 0; } }
          ::-webkit-scrollbar { width: 6px; }
          ::-webkit-scrollbar-thumb { background: #39ff14; border-radius: 8px; }
          ::-webkit-scrollbar-thumb:hover { background: #00ffea; }
        `}</style>
      </div>
    );
  }
}

export default Calc;

export const displayTerminalCalc = (addFolder, openApp) => {
  return <Calc addFolder={addFolder} openApp={openApp}> </Calc>;
}
