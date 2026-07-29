'use client';

import { useState } from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import { ArrowIcon, Tag } from '@/components/ui';
import { HOME_ADDITIONAL_SKILLS, HOME_CORE_SKILLS } from '../../_constants/home.constants';

export function SkillList() {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <div className="flex flex-wrap gap-2">
        {HOME_CORE_SKILLS.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>

      <Collapsible.Content className="collapsible-content">
        <div className="flex flex-wrap gap-2 pt-2">
          {HOME_ADDITIONAL_SKILLS.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>
      </Collapsible.Content>

      <Collapsible.Trigger asChild>
        <button
          type="button"
          className="text-accent group mt-4 inline-flex items-center gap-1.5 text-sm font-bold transition-colors"
        >
          {open ? 'Show fewer' : `+${HOME_ADDITIONAL_SKILLS.length} more technologies`}
          <ArrowIcon
            className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? '-rotate-90' : 'rotate-90'}`}
          />
        </button>
      </Collapsible.Trigger>
    </Collapsible.Root>
  );
}
