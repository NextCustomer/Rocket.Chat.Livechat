import { h } from 'preact';

import { createClassName, memo } from '../../helpers';
import { MessageBubble } from '../MessageBubble';
import styles from './styles.scss';

import VideoIcon from '../../../icons/video.svg';

export const JitsiAttachment = memo(({
	url,
	title,
	className,
	...messageBubbleProps
}) => (
	<MessageBubble
		className={createClassName(styles, 'file-attachment', {}, [className])}
		{...messageBubbleProps}
	>
		<a
			href={url}
			download
			target='_blank'
			rel='noopener noreferrer'
			className={createClassName(styles, 'file-attachment__inner')}
		>
			<VideoIcon width={32} />
			<span className={createClassName(styles, 'file-attachment__title')}>{title}</span>
		</a>
	</MessageBubble>
));
