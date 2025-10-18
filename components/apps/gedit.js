import React, { Component } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import $ from 'jquery';
import ReactGA from 'react-ga4';
import emailjs from '@emailjs/browser';
import { Send, XCircle, Mail, User, MessageSquare } from 'lucide-react';

export class Gedit extends Component {

    constructor() {
        super();
        this.state = {
            sending: false,
            sent: false,
            error: false
        }
    }

    componentDidMount() {
        emailjs.init("p7Qe6pO4O4F5g4MHJ");
    }

    sendMessage = async () => {
        let name = $("#sender-name").val().trim();
        let subject = $("#sender-subject").val().trim();
        let message = $("#sender-message").val().trim();

        let error = false;

        if (!name) {
            $("#sender-name").val('');
            $("#sender-name").attr("placeholder", "Name must not be Empty!");
            error = true;
        }

        if (!message) {
            $("#sender-message").val('');
            $("#sender-message").attr("placeholder", "Message must not be Empty!");
            error = true;
        }
        if (error) return;

        this.setState({ sending: true, sent: false, error: false });

        const serviceID = "service_stplqpi";
        const templateID = "template_6ozzu0x";
        const templateParams = { name, subject, message };

        emailjs.send(serviceID, templateID, templateParams)
            .then(() => {
                this.setState({ sending: false, sent: true });
                setTimeout(() => $("#close-gedit").trigger("click"), 2000);
            })
            .catch(() => {
                this.setState({ sending: false, error: true });
            });

        ReactGA.event({
            category: "Send Message",
            action: `${name}, ${subject}, ${message}`
        });
    }

    render() {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4 }}
                className="relative flex flex-col bg-gradient-to-br from-[#2b0d5b] via-[#1e1b5a] to-[#09021e] text-white rounded-lg overflow-hidden shadow-[0_0_30px_rgba(118,87,255,0.4)] border border-gray-700"
            >
                {/* Header */}
                <div className="flex items-center justify-between px-3 py-2 bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600 text-sm font-medium tracking-wide shadow-lg">
                    <span className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Contact Me
                    </span>
                    <div className="flex items-center gap-2">
                        <motion.button
                            onClick={this.sendMessage}
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-1 bg-black/40 hover:bg-black/60 border border-gray-600 px-3 py-1 rounded-lg text-sm transition-all"
                        >
                            <Send className="w-3.5 h-3.5" /> Send
                        </motion.button>
                        <button id="close-gedit" className="p-1 hover:bg-black/30 rounded-full transition">
                            <XCircle className="w-4 h-4 text-red-400" />
                        </button>
                    </div>
                </div>

                {/* Main Form */}
                <div className="flex flex-col flex-grow p-4 space-y-3 font-light bg-gradient-to-br from-[#2d004d] via-[#0a0520] to-[#000000] backdrop-blur-sm">
                    <div className="relative">
                        <User className="absolute left-1 top-1/2 transform -translate-y-1/2 w-4 h-4 text-indigo-400" />
                        <input
                            id="sender-name"
                            placeholder="Your Name"
                            className="w-full pl-7 pr-2 py-1.5 bg-transparent border-b border-gray-600 focus:border-indigo-400 focus:outline-none text-sm transition-all"
                        />
                    </div>

                    <div className="relative">
                        <Mail className="absolute left-1 top-1/2 transform -translate-y-1/2 w-4 h-4 text-indigo-400" />
                        <input
                            id="sender-subject"
                            placeholder="Subject (feedback, lil chat, etc.)"
                            className="w-full pl-7 pr-2 py-1.5 bg-transparent border-b border-gray-600 focus:border-indigo-400 focus:outline-none text-sm transition-all"
                        />
                    </div>

                    <div className="relative flex-grow">
                        <MessageSquare className="absolute left-1 top-2 w-4 h-4 text-indigo-400" />
                        <textarea
                            id="sender-message"
                            placeholder="Write your message...(im waiting...)"
                            className="w-full h-36 pl-7 pr-2 py-2 bg-transparent border border-gray-600 rounded-lg focus:border-indigo-400 focus:outline-none resize-none text-sm tracking-wide transition-all"
                        />
                    </div>
                </div>

                {/* Status Overlay */}
                <AnimatePresence>
                    {this.state.sending && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-md text-sm"
                        >
                            <motion.img
                                initial={{ rotate: 0 }}
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                                src="./themes/Yaru/status/process-working-symbolic.svg"
                                className="w-8 mb-2"
                                alt="Sending..."
                            />
                            <span className="animate-pulse">Sending message...</span>
                        </motion.div>
                    )}

                    {this.state.sent && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 flex flex-col items-center justify-center bg-green-900/40 text-green-200 font-medium backdrop-blur-md"
                        >
                            Message Sent Successfully!
                        </motion.div>
                    )}

                    {this.state.error && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 flex flex-col items-center justify-center bg-red-900/40 text-red-200 font-medium backdrop-blur-md"
                        >
                            Something went wrong! Try again.
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        );
    }
}

export default Gedit;
export const displayGedit = () => <Gedit />;
