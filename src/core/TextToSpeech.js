export default class TextToSpeak {
  constructor(lang) {
    this.sys = window.speechSynthesis;
    this.voice = this.getVoice(lang);
  }

  getVoice(lang) {
    const voices = this.sys.getVoices();

    for (let i of voices) {
      if (i.lang == lang) return i;
    }
  }

  changeLang(lang) {
    this.voice = this.getVoice(lang);
  }

  speak(content) {
    const sent = new window.SpeechSynthesisUtterance(content);
    sent.voice = this.voice;

    this.sys.speak(sent);
  }
}
