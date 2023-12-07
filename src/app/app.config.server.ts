import { mergeApplicationConfig, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { getWindow } from 'ssr-window';


const window = getWindow()
const isIframe = window !== window.parent && !window.opener;


const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    importProvidersFrom(RouterModule.forRoot(routes, {
      useHash: true,
      // Don't perform initial navigation in iframes
      initialNavigation: !isIframe ? 'enabledNonBlocking' : 'disabled'
    }))
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
