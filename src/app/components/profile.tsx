'use client';

import { supabase } from '../supabaseClient';
import { useState, useEffect } from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Link,
} from '@nextui-org/react';

function conditionalContact(
  contact: string,
  contactAddress?: string,
  contactLink?: string
) {
  if (contact === 'Email') {
    return (
      <TableCell>
        {contact} : {contactAddress}
      </TableCell>
    );
  } else if (contact === 'Github') {
    return (
      <TableCell>
        {contact} : <Link href={contactLink}>깃헙아이콘예정</Link>
      </TableCell>
    );
  } else if (contact === 'Blog') {
    return (
      <TableCell>
        {contact} : <Link href={contactLink}>티스토리블로그아이콘예정</Link>
      </TableCell>
    );
  } else {
    return <TableCell>''</TableCell>;
  }
}

export default function App() {
  const [contactInfo, setContactInfo] = useState<
    Database['public']['Tables']['contact_info']['Row'][]
  >([]);
  useEffect(() => {
    async function fetchData() {
      const { data: contact_info, error } = await supabase
        .from('contact_info')
        .select('*');

      if (error) {
        console.error('Error fetching data:', error.message);
      } else {
        setContactInfo(contact_info);
      }
    }

    fetchData();
  }, []);

  console.log(contactInfo);

  return (
    <div>
      {contactInfo.length > 0 ? (
        <Table aria-label="Example table with dynamic content">
          <TableHeader>
            <TableColumn>프로필</TableColumn>
            <TableColumn>contact</TableColumn>
          </TableHeader>
          <TableBody>
            {contactInfo.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.profile}</TableCell>
                {conditionalContact(
                  row.contact,
                  row.contact_address,
                  row.contact_link
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p>로딩 중</p>
      )}
    </div>
  );
}
