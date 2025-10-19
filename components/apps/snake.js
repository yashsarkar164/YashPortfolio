import React, { useState, useEffect, useRef } from "react";

const CELL_SIZE = 20;
const SPEED = 120;

export default function SnakeGame() {
  const canvasRef = useRef(null);
  const [snake, setSnake] = useState([
    { x: 8, y: 8 },
    { x: 7, y: 8 },
  ]);
  const [food, setFood] = useState({ x: 12, y: 8 });
  const [direction, setDirection] = useState("RIGHT");
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const highestScore = 69;

  const rows = Math.floor(window.innerHeight / CELL_SIZE / 1.5);
  const cols = Math.floor(window.innerWidth / CELL_SIZE / 1.8);

 
  useEffect(() => {
    const checkMobile = () => {
      const mobile =
        window.innerWidth < 768 ||
        /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      setIsMobile(mobile);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // keyboard controls
  useEffect(() => {
    const handleKey = (e) => {
      switch (e.key) {
        case "ArrowUp":
        case "w":
          if (direction !== "DOWN") setDirection("UP");
          break;
        case "ArrowDown":
        case "s":
          if (direction !== "UP") setDirection("DOWN");
          break;
        case "ArrowLeft":
        case "a":
          if (direction !== "RIGHT") setDirection("LEFT");
          break;
        case "ArrowRight":
        case "d":
          if (direction !== "LEFT") setDirection("RIGHT");
          break;
        case " ":
          if (gameOver) resetGame();
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [direction, gameOver]);

  // game loop
  useEffect(() => {
    if (gameOver || isMobile) return;
    const interval = setInterval(moveSnake, SPEED);
    return () => clearInterval(interval);
  });

  const moveSnake = () => {
    const newSnake = [...snake];
    const head = { ...newSnake[0] };

    if (direction === "UP") head.y -= 1;
    if (direction === "DOWN") head.y += 1;
    if (direction === "LEFT") head.x -= 1;
    if (direction === "RIGHT") head.x += 1;

    // collision detection
    if (
      head.x < 0 ||
      head.y < 0 ||
      head.x >= cols ||
      head.y >= rows ||
      newSnake.some((seg) => seg.x === head.x && seg.y === head.y)
    ) {
      setGameOver(true);
      return;
    }

    newSnake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
      setScore(score + 1);
      placeFood(newSnake);
    } else {
      newSnake.pop();
    }
    setSnake(newSnake);
  };

  const placeFood = (snakeBody) => {
    let newFood;
    do {
      newFood = {
        x: Math.floor(Math.random() * cols),
        y: Math.floor(Math.random() * rows),
      };
    } while (snakeBody.some((s) => s.x === newFood.x && s.y === newFood.y));
    setFood(newFood);
  };

  const resetGame = () => {
    setSnake([
      { x: 8, y: 8 },
      { x: 7, y: 8 },
    ]);
    setFood({ x: 12, y: 8 });
    setDirection("RIGHT");
    setScore(0);
    setGameOver(false);
  };

  // render canvas safely
  useEffect(() => {
    if (isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return; // ✅ safeguard
    const ctx = canvas.getContext("2d");
    if (!ctx) return; // ✅ safeguard

    ctx.fillStyle = "#0d1117";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // draw snake
    snake.forEach((part, i) => {
      const gradient = ctx.createLinearGradient(
        part.x * CELL_SIZE,
        part.y * CELL_SIZE,
        part.x * CELL_SIZE + CELL_SIZE,
        part.y * CELL_SIZE + CELL_SIZE
      );
      gradient.addColorStop(0, i === 0 ? "#58a6ff" : "#3fb950");
      gradient.addColorStop(1, i === 0 ? "#1f6feb" : "#2ea043");

      ctx.fillStyle = gradient;
      ctx.shadowColor = i === 0 ? "#00FFAA" : "#00CC66";
      ctx.shadowBlur = i === 0 ? 8 : 4;
      ctx.beginPath();
      ctx.roundRect(
        part.x * CELL_SIZE,
        part.y * CELL_SIZE,
        CELL_SIZE - 2,
        CELL_SIZE - 2,
        5
      );
      ctx.fill();
    });

    // draw food
    ctx.fillStyle = "#f85149";
    ctx.shadowBlur = 0;
    ctx.beginPath();
    ctx.arc(
      food.x * CELL_SIZE + CELL_SIZE / 2,
      food.y * CELL_SIZE + CELL_SIZE / 2,
      CELL_SIZE / 2.5,
      0,
      2 * Math.PI
    );
    ctx.fill();
  }, [snake, food, isMobile]);

  // show Beta message on mobile
  if (isMobile) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-screen bg-[#0d1117] text-white font-mono px-6 text-center">
        <h1 className="text-2xl font-bold text-[#58a6ff] mb-3 animate-pulse">
          🐍 Snake Game (Beta)
        </h1>
        <p className="text-gray-300 mb-3">
          This version is currently in{" "}
          <span className="text-yellow-400 font-semibold">Beta</span>.
        </p>
        <p className="text-red-400 font-semibold mb-2">
          Mobile play is not supported yet.
        </p>
        <p className="text-gray-400 text-sm">
          Please try again on a larger screen or desktop device.
        </p>
      </div>
    );
  }

  // desktop / pc version
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#0d1117] text-white font-mono">
      <h2 className="text-xl font-bold tracking-wider text-[#58a6ff] mb-1">
        🐍 SNAKE GAME
      </h2>
      <div className="flex items-center justify-center gap-6 mb-3 text-sm">
        <p className="text-yellow-400">Highest Score: {highestScore}</p>
        <p className="text-gray-400">Score: {score}</p>
      </div>

      {gameOver ? (
        <div className="text-center mt-8">
          <p className="text-red-400 text-lg mb-2 font-semibold">Game Over!</p>
          <button
            onClick={resetGame}
            className="bg-[#238636] hover:bg-[#2ea043] px-4 py-1 rounded text-white"
          >
            Restart
          </button>
        </div>
      ) : (
        <canvas
          ref={canvasRef}
          width={cols * CELL_SIZE}
          height={rows * CELL_SIZE}
          className="rounded-lg border border-gray-600 shadow-lg"
        />
      )}

      <div className="mt-3 text-xs text-gray-500">
        Controls: ↑ ↓ ← → / WASD
      </div>
    </div>
  );
}
