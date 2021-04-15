import {memo, useEffect} from 'react';
import { i18n } from '@lingui/core';
import {I18nProvider} from '@lingui/react';
import {dynamicActivate} from './i18n';

export const LocalesProvider = memo(function LocalesProvider({children}) {
  useEffect(dynamicActivate, [])

  return (
    <I18nProvider i18n={i18n}>
      {children}
    </I18nProvider>
  );
});
