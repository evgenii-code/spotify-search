/* eslint-disable camelcase */
import Vue from 'vue';
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import {
    required,
    email,
    min,
    max,
    numeric,
    length,
    alpha_dash,
} from 'vee-validate/dist/rules';

extend('required', required);
extend('email', email);
extend('min', min);
extend('max', max);
extend('numeric', numeric);
extend('length', length);
extend('alpha_dash', alpha_dash);

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
