import Image from 'next/image';
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/react';
export default function Home() {
  return (
    <div>
      <main>
        <ul className="flex gap-5 justify-center items-center">
          <li className="w-2/5 xs:w-full">
            <Card>
              <CardBody>
                프론트엔드 개발자 현준용 입니다! 새로운 기술을 찾는 것을
                좋아하고 항상 어떤 기술이 잘 어울리는지 고민합니다.
              </CardBody>
            </Card>
          </li>
        </ul>
      </main>
    </div>
  );
}
