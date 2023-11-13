'use client';

import { supabase } from '@/app/supabaseClient';
import { useState, useEffect } from 'react';
import { Progress } from '@nextui-org/react';
export default function Company() {
  const [skillInfo, setSkillInfo] = useState<
    Database['public']['Tables']['skillInfo']['Row'][]
  >([]);
  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from('skill_info').select('*');

      if (error) {
        console.error('Error fetching data:', error.message);
      } else {
        setSkillInfo(data);
      }
    }

    fetchData();
  }, []);
  const bgColor = (color: string) => {
    if (color === '#34d399') return '!bg-[#34d399]';
    if (color === '#38bdf8') return '!bg-[#38bdf8]';
    if (color === '#a78bfa') return '!bg-[#a78bfa]';
    if (color === '#fbbf24') return '!bg-[#fbbf24]';
    if (color === '#fb7185') return '!bg-[#fb7185]';
    // return `bg-[${color}]`;
  };
  console.log(skillInfo);

  return (
    <div className="flex flex-col gap-6 w-full max-w-md">
      {skillInfo.map((item) => (
        <div>
          <Progress
            key={item.id}
            isStriped
            classNames={{ indicator: bgColor(item.color) }}
            label={item.name}
            value={item.percentage}
            showValueLabel={true}
          />
        </div>
      ))}
    </div>
  );
}
