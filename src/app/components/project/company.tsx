'use client';

import { supabase } from '@/app/supabaseClient';
import { useState, useEffect } from 'react';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
export default function Company() {
  const [projectList, setprojectList] = useState<
    Database['public']['Tables']['projectlist']['Row'][]
  >([]);
  useEffect(() => {
    async function fetchData() {
      const { data: contact_info, error } = await supabase
        .from('projectlist')
        .select('*');

      if (error) {
        console.error('Error fetching data:', error.message);
      } else {
        setprojectList(contact_info);
      }
    }

    fetchData();
  }, []);

  console.log(projectList);

  return (
    <div className="grid gap-2 grid-cols-2 sm:grid-cols-4">
      {projectList.map((item) => (
        <Card shadow="sm" key={item.id} isPressable>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className=" object-cover h-[200px]"
              src={`/img` + item.imageUrl}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
