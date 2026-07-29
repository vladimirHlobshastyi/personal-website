import type { ComponentType } from 'react';
import type { AboutIconName, AboutIconProps } from './about-icon.types';
import {
  BriefcaseIcon,
  CheckShieldIcon,
  ClockStrokeIcon,
  CompassStrokeIcon,
  ConnectedNodesIcon,
  ConversationIcon,
  GlobeStrokeIcon,
  LayeredBlocksIcon,
  MobileStackIcon,
  SparkFrameIcon,
  SpeedLinesIcon,
} from './about-icon-glyphs';

const ABOUT_ICON_COMPONENTS = {
  architecture: LayeredBlocksIcon,
  briefcase: BriefcaseIcon,
  clock: ClockStrokeIcon,
  collaboration: ConversationIcon,
  compass: CompassStrokeIcon,
  conversation: ConversationIcon,
  globe: GlobeStrokeIcon,
  layers: LayeredBlocksIcon,
  mobile: MobileStackIcon,
  nodes: ConnectedNodesIcon,
  shield: CheckShieldIcon,
  spark: SparkFrameIcon,
  speed: SpeedLinesIcon,
} satisfies Record<AboutIconName, ComponentType<AboutIconProps>>;

export function getAboutIcon(name: AboutIconName, className: string) {
  const Icon = ABOUT_ICON_COMPONENTS[name];
  return <Icon className={className} />;
}
