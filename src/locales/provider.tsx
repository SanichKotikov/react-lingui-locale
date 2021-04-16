import {memo, FC} from 'react';
import { i18n } from '@lingui/core';
import {I18nProvider} from '@lingui/react';
import {messages} from './messages/en';

const TextWrapper: FC = ({children}) => <span>{children}</span>

i18n.load('en', messages);
i18n.activate('en');

export const LocalesProvider = memo(function LocalesProvider({children}) {

  return (
    <I18nProvider i18n={i18n} defaultComponent={TextWrapper}>
      {children}
    </I18nProvider>
  );
});
