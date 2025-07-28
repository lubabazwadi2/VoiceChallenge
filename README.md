# Voice Appointment Scheduler - AssemblyAI Challenge

A simple but functional voice agent for scheduling business appointments using AssemblyAI's Universal-Streaming technology.

## 🎯 Challenge Category

**Business Automation Voice Agent** - Automates appointment scheduling for businesses with voice commands.

## ✨ Features

- **Real-time voice recognition** using browser Speech API + AssemblyAI integration
- **Natural language processing** for appointment extraction
- **Voice feedback** with text-to-speech responses
- **Appointment management** (schedule, list, cancel)
- **Business terminology recognition** (Dr., appointment times, etc.)
- **Ultra-low latency** design for responsive interactions

## 🚀 How It Works

1. User clicks microphone button to start voice input
2. AssemblyAI Universal-Streaming processes audio in real-time (300ms latency)
3. Voice commands are parsed for appointment details (who, when)
4. System schedules appointment and provides voice confirmation
5. All appointments are displayed in real-time

## 💼 Business Use Cases

- **Medical offices**: Schedule patient appointments
- **Service businesses**: Book consultations and services
- **Sales teams**: Schedule follow-up calls
- **Support centers**: Book callback appointments

## 🛠 Setup Instructions

### Prerequisites

- AssemblyAI API key (free $50 credits for new users)
- Modern web browser with microphone access

### Installation

1. Clone this repository
2. Get your API key from [AssemblyAI](https://www.assemblyai.com/)
3. Replace `assemblyAI` in `index.html` with your actual API key
4. Open `index.html` in a web browser
5. Allow microphone permissions when prompted

### Usage Examples

- "Schedule appointment with Dr. Nidal tomorrow at 3 PM"
- "Book meeting with Lubaba Radwan next Monday at 2 o'clock"
- "List my appointments"
- "Cancel appointment"

## 🔧 Technical Implementation

### AssemblyAI Universal-Streaming Integration

```javascript
// Real-time streaming setup (simplified for demo)
const assemblyAI = new AssemblyAIStreaming(apiKey);
await assemblyAI.startStreaming();
```

### Key Technologies

- **AssemblyAI Universal-Streaming**: Ultra-fast transcription (300ms latency)
- **Web Speech API**: Browser-based audio capture
- **Natural Language Processing**: Command parsing and entity extraction
- **Text-to-Speech**: Voice responses for better UX

### Performance Optimizations

- Continuous listening mode for seamless interaction
- Real-time transcript updates
- Minimal DOM manipulation for smooth UI
- Efficient appointment storage and retrieval

## 📊 Demo Flow

1. **Start**: Click microphone button
2. **Speak**: "Schedule appointment with Eng. Lubaba tomorrow at 2 PM"
3. **Process**: AssemblyAI transcribes in real-time
4. **Extract**: System identifies name (Eng. Lubaba) and time (tomorrow 2 PM)
5. **Confirm**: Voice response + visual confirmation
6. **Store**: Appointment added to schedule

## 🏆 Challenge Requirements Met

- ✅ Uses AssemblyAI Universal-Streaming technology
- ✅ Automates real business process (appointment scheduling)
- ✅ Handles business terminology and proper nouns
- ✅ Professional B2B/B2C application
- ✅ Multi-step workflow implementation
- ✅ Could be deployed in real business environments

## 🔮 Future Enhancements

- Calendar integration (Google Calendar, Outlook)
- SMS/Email appointment confirmations
- Multi-language support
- Advanced NLP for complex scheduling
- Database persistence
- Admin dashboard for businesses

## 📝 Notes

This is a minimal viable product designed for the 1-hour challenge timeframe. The core functionality demonstrates AssemblyAI's Universal-Streaming capabilities in a practical business automation context.

## 🚀 Live Demo

---
