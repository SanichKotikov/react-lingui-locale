import {memo} from 'react';
import { t, Trans, Plural } from '@lingui/macro';
import { useLingui } from '@lingui/react';

const data = { name: 'World', count: 1000 };

export const Examples = memo(function Examples() {
  const { i18n } = useLingui();

  return (
    <div>
      <h3>Usage:</h3>
      <ul>
        <li>{t({id: 'function_text', message: 'Image caption'})}</li>
        <li>
          <Trans id="hello">Hello {data.name}!</Trans>
        </li>
        <li>
          <Plural
            id="counting"
            value={0}
            _0="There are no messages"
            one="There's # message in your inbox"
            other="There are # messages in your inbox"
          />
        </li>
        <li>
          <Plural
            id="counting_markup"
            value={data.count}
            _0="There are no messages"
            _1="There's one message in your inbox"
            _2="There are two messages in your inbox, that's not much!"
            other={<Trans>There are <strong># messages</strong> in your inbox</Trans>}
          />
        </li>
        <li>
          <Trans id="last_login">
            Last login on {i18n.date(new Date())}.
         </Trans>
        </li>
        <li>
          <Trans id="with_link">
            Some message with <em>link</em> in the middle.
          </Trans>
        </li>
      </ul>
    </div>
  );
});
