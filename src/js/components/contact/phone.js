/* eslint-disable prettier/prettier */
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

export const usePhone = () => {
  const input = document.querySelector('#phone');

  intlTelInput(input, {
    separateDialCode: true,
    autoPlaceholder: true,
    initialCountry: 'auto',
    onlyCountries: ['us', 'ru'],
    strictMode: true,
    geoIpLookup: (callback) => {
      fetch('https://ipapi.co/json')
        .then((res) => res.json())
        .then((data) => callback(data.country_code))
        .catch(() => callback('us'));
    },
    utilsScript:
      'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.js',
  });
};


