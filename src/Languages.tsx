import {memo} from 'react';
import { useLingui } from '@lingui/react';
import {LOCALES, dynamicActivate} from './locales/i18n';
import { Select } from './components/Select/Select';

export const Languages = memo(function Languages() {
  const { i18n } = useLingui();

  return (
    <Select
      value={i18n.locale}
      options={Object.keys(LOCALES)}
      onChange={dynamicActivate}
    />
  );
});
