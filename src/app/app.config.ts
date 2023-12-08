import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IPublicClientApplication, PublicClientApplication, InteractionType } from '@azure/msal-browser';
import { MsalBroadcastService, MsalService, MSAL_GUARD_CONFIG, MSAL_INSTANCE, MsalGuardConfiguration } from '@azure/msal-angular';
import { provideClientHydration } from '@angular/platform-browser';
import { msalConfig } from './auth-config';
import { routes } from './app.routes';
import { getWindow } from 'ssr-window';

/**
 * Here we pass the configuration parameters to create an MSAL instance.
 * For more info, visit: https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-angular/docs/v2-docs/configuration.md
 */
export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication(msalConfig);
}

/**
 * Set your default interaction type for MSALGuard here. If you have any
 * additional scopes you want the user to consent upon login, add them here as well.
 */
export function MSALGuardConfigFactory(): MsalGuardConfiguration {
  return { 
    interactionType: InteractionType.Redirect 
  }
}

const window = getWindow()
const isIframe = window !== window.parent && !window.opener;

export const appConfig: ApplicationConfig = {
  providers: [ 
    provideClientHydration(),
    {
      provide: MSAL_GUARD_CONFIG,
      useFactory: MSALGuardConfigFactory
    },
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    }, 
    importProvidersFrom(RouterModule.forRoot(routes, {
      useHash: true,
      // Don't perform initial navigation in iframes
      initialNavigation: !isIframe ? 'enabledNonBlocking' : 'disabled'
    })),
    MsalService,
    MsalBroadcastService
]
};
