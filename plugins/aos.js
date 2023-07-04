import Vue from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
AOS.init({
    duration: 1200
});

// Add AOS to the Vue prototype
Vue.prototype.$aos = AOS;
