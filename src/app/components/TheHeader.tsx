import Image from 'next/image';
import { Link } from '@nextui-org/react';

export default function TheHeader() {
  return (
    <header className="flex justify-between">
      <Link color="success" href="/">
        <span className="text-2xl font-bold xs:text-xl xs:font-semibold">
          Hyun's Portfolio
        </span>
      </Link>

      <ul className="flex gap-3 items-center justify-center">
        <li>
          <Link color="success" href="/" className="text-xl">
            Home
          </Link>
        </li>

        <li>
          <Link color="success" href="/project/list" className="text-xl">
            Project
          </Link>
        </li>
        {/* <li>
          <el-switch
            v-model="isDark"
            className="ml-2"
            width="40"
            style="
              --el-switch-on-color: #333333;
              --el-switch-off-color: #bebebe;
            "
            :active-action-icon="Moon"
            :inactive-action-icon="Sunny"
          />
        </li> */}
      </ul>
    </header>
  );
}
