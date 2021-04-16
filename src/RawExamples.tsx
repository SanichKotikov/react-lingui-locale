import {memo} from 'react';
import { useLingui, Trans } from '@lingui/react';

// define message
const message = {id: 'raw_function_text', message: 'Something'};

export const RawExamples = memo(function RawExamples() {
  const { i18n } = useLingui();

  return (
    <div>
      <h3>Usage:</h3>
      <ul>
        <li>{i18n._(message)}</li>
        <li>
          <Trans
            id="raw_hello"
            message={'Hello {name}!'}
            values={{ name: 'World' }}
          />
        </li>
        <li>
          <Trans
            id="raw_plural"
            message="You have {count, plural, one {# message} other {# messages}}."
            values={{count: 2}}
          />
        </li>
        <li>
          <Trans
            id="raw_last_login"
            message="Last login on {date}."
            values={{ date: i18n.date(new Date()) }}
          />
        </li>
        <li>
          <Trans
            id="raw_with_link"
            message="Some message with <0>link</0> in the middle."
            components={[<strong />]}
          />
        </li>
      </ul>
    </div>
  );
});
