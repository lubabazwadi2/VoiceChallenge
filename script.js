let isListening = false;
let recognition;
let appointments = [
	{ name: 'Dr. Nidal', time: 'Tomorrow 3:00 PM', type: 'Demo' },
];

// Initialize speech recognition
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
	const SpeechRecognition =
		window.SpeechRecognition || window.webkitSpeechRecognition;
	recognition = new SpeechRecognition();
	recognition.continuous = true;
	recognition.interimResults = true;
	recognition.lang = 'en-US';

	recognition.onresult = function (event) {
		let transcript = '';
		for (let i = event.resultIndex; i < event.results.length; i++) {
			if (event.results[i].isFinal) {
				transcript += event.results[i][0].transcript;
			}
		}

		if (transcript) {
			document.getElementById('transcript').textContent = transcript;
			processVoiceCommand(transcript);
		}
	};

	recognition.onerror = function (event) {
		console.error('Speech recognition error:', event.error);
		updateStatus('Error: ' + event.error);
		stopListening();
	};

	recognition.onend = function () {
		if (isListening) {
			recognition.start(); // Restart if we're still supposed to be listening
		}
	};
}

function toggleListening() {
	if (isListening) {
		stopListening();
	} else {
		startListening();
	}
}

function startListening() {
	if (!recognition) {
		alert(
			'Speech recognition not supported in this browser. This is a demo of the voice agent functionality.'
		);
		simulateVoiceInteraction();
		return;
	}

	isListening = true;
	recognition.start();
	document.getElementById('micButton').classList.add('listening');
	document.getElementById('micButton').textContent = '🔴';
	updateStatus(
		'Listening... Say something like "Schedule appointment with Eng. Lubaba tomorrow at 2 PM"'
	);
}

function stopListening() {
	isListening = false;
	if (recognition) {
		recognition.stop();
	}
	document.getElementById('micButton').classList.remove('listening');
	document.getElementById('micButton').textContent = '🎤';
	updateStatus('Ready to schedule appointments');
}

function updateStatus(message) {
	document.getElementById('status').textContent = message;
}

function processVoiceCommand(transcript) {
	const lowerTranscript = transcript.toLowerCase();

	// Simple appointment scheduling logic
	if (
		lowerTranscript.includes('schedule') ||
		lowerTranscript.includes('appointment')
	) {
		const appointment = extractAppointmentInfo(transcript);
		if (appointment) {
			addAppointment(appointment);
			updateStatus(`✅ Scheduled: ${appointment.name} - ${appointment.time}`);
			speak(
				`I've scheduled your appointment with ${appointment.name} for ${appointment.time}`
			);
		} else {
			updateStatus('❓ Please specify who and when for the appointment');
			speak('Could you please specify who the appointment is with and when?');
		}
	} else if (lowerTranscript.includes('cancel')) {
		updateStatus('📝 Appointment cancellation noted');
		speak('Which appointment would you like to cancel?');
	} else if (
		lowerTranscript.includes('list') ||
		lowerTranscript.includes('show')
	) {
		updateStatus('📋 Showing your appointments');
		speak(`You have ${appointments.length} appointments scheduled`);
	} else {
		updateStatus('🤔 I can help schedule, cancel, or list appointments');
		speak(
			'I can help you schedule appointments, cancel them, or show your current appointments'
		);
	}
}

function extractAppointmentInfo(transcript) {
	// Simple extraction logic - in real implementation, use NLP
	const words = transcript.split(' ');
	let name = '';
	let time = '';

	// Look for names (simplified)
	const nameIndicators = ['with', 'dr', 'doctor', 'mr', 'mrs', 'ms'];
	for (let i = 0; i < words.length - 1; i++) {
		if (nameIndicators.includes(words[i].toLowerCase())) {
			name = words[i + 1];
			if (
				words[i + 2] &&
				!['at', 'on', 'tomorrow', 'today'].includes(words[i + 2].toLowerCase())
			) {
				name += ' ' + words[i + 2];
			}
			break;
		}
	}

	// Look for time (simplified)
	const timeIndicators = [
		'at',
		'tomorrow',
		'today',
		'monday',
		'tuesday',
		'wednesday',
		'thursday',
		'friday',
	];
	for (let i = 0; i < words.length; i++) {
		if (timeIndicators.includes(words[i].toLowerCase())) {
			time = words.slice(i).join(' ');
			break;
		}
	}

	if (name && time) {
		return { name: name, time: time, type: 'Scheduled' };
	}
	return null;
}

function addAppointment(appointment) {
	appointments.push(appointment);
	renderAppointments();
}

function renderAppointments() {
	const container = document.getElementById('appointments');
	container.innerHTML = appointments
		.map(
			(apt) =>
				`<div class="appointment-item">${apt.type}: ${apt.name} - ${apt.time}</div>`
		)
		.join('');
}

function speak(text) {
	if ('speechSynthesis' in window) {
		const utterance = new SpeechSynthesisUtterance(text);
		utterance.rate = 0.8;
		utterance.pitch = 1;
		speechSynthesis.speak(utterance);
	}
}

function simulateVoiceInteraction() {
	// Simulate a voice interaction for demo purposes
	setTimeout(() => {
		document.getElementById('transcript').textContent =
			'Schedule appointment with Eng. Lubaba tomorrow at 2 PM';
		processVoiceCommand(
			'Schedule appointment with Eng. Lubaba tomorrow at 2 PM'
		);
	}, 1000);
}

// AssemblyAI Universal-Streaming Integration (placeholder)
// In real implementation, this would connect to AssemblyAI's WebSocket API
class AssemblyAIStreaming {
	constructor(apiKey) {
		this.apiKey = apiKey;
		this.socket = null;
	}

	async startStreaming() {
		// This would connect to AssemblyAI's Universal-Streaming WebSocket
		console.log('Would connect to AssemblyAI Universal-Streaming API');
		// const response = await fetch('https://api.assemblyai.com/v2/realtime/token', {
		//     method: 'POST',
		//     headers: {
		//         'authorization': this.apiKey,
		//         'content-type': 'application/json'
		//     },
		//     body: JSON.stringify({ expires_in: 3600 })
		// });
	}
}

// Initialize AssemblyAI (replace it with your API key)
const assemblyAI = new AssemblyAIStreaming('304c86848cee42bf91500a9fe7bbb0d5');

// Initialize the app
renderAppointments();
