// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "FIREBASE_API_KEY", // replace by prebuild step defined in package.json
    authDomain: "duel-7204f.firebaseapp.com",
    projectId: "duel-7204f",
    storageBucket: "duel-7204f.appspot.com",
    messagingSenderId: "681387080652",
    appId: "1:681387080652:web:951662243f54caf2803b69"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
