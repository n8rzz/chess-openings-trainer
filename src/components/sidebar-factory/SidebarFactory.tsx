import { useCallback, useState } from 'react';
import { UiIf } from '../shared/ui-if/UiIf.tsx';
import { UiButton } from '../shared/ui-button/UiButton.tsx';

export function SidebarFactory() {
  const [isPreparing, setIsPreparing] = useState(false);

  const handleClick = useCallback(() => {
    setIsPreparing(!isPreparing);
  }, [isPreparing]);

  return (
    <div>
      <UiIf condition={!isPreparing}>
        <ul>
          <li>
            <UiButton onClick={handleClick}>Create Training Session</UiButton>
          </li>
        </ul>
      </UiIf>
      <UiIf condition={isPreparing}>
        <div>PREPARING TRAINING SESSION</div>
        <UiButton onClick={handleClick}>Create Training Session</UiButton>
      </UiIf>
    </div>
  );
}
