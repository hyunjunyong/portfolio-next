import { Card, CardBody, CardHeader, Image, Link } from '@nextui-org/react';
import SubTitle from '../layout/subTitle';

const webtoonRole = () => {
  return (
    <>
      <p>백엔드와 api 연동</p>
      <p>작가홈, 웹툰홈 페이지 제작 및 디자인</p>
    </>
  );
};

const middleRole = () => {
  return (
    <>
      <p>페이지 퍼블리싱</p>
      <p>사용자에게 주변 추천 장소 기능 추가</p>
      <p>각 사용자에 위치에서 교통편 및 거리 api 연동</p>
      <p>장소 추천 api 연동</p>
    </>
  );
};
const middleResult = () => {
  return (
    <>
      <p>2021.07 스마트SW경진대회(최우수상 수상)</p>
      <p>2021.10 Sw중심대학 공동창업 camp(대상 수상)</p>
    </>
  );
};

const jejuRole = () => {
  return (
    <>
      <p>제주대학교 소개하는 간단한 퀴즈 기능 구현</p>
      <p>댓글 Discuss Api연동</p>
    </>
  );
};

export default function Personal() {
  return (
    <div>
      <p className="text-center text-2xl xs:text-xl font-bold xs:font-semibold">
        개인 프로젝트
      </p>
      <Card className="box-card mt-5">
        <CardBody>
          <CardHeader>
            <p className="font-bold">웹툰 사이트</p>
          </CardHeader>
          <div className="flex gap-5 justify-between sm:flex-wrap-reverse xs:flex-wrap-reverse sm:justify-center">
            <div>
              <SubTitle title="기간" content={<p>2021.09 ~ 2021.12</p>} />

              <SubTitle title="Skill" content={<p>Vue2, Vuetify , Vuex</p>} />

              <SubTitle
                title="URL"
                content={
                  <p className="flex gap-2">
                    <Link
                      type="success"
                      href="https://github.com/hyunjunyong/WEBTOON/"
                      target="_blank"
                    >
                      Git
                    </Link>
                    <Link
                      type="success"
                      href="https://www.youtube.com/watch?v=Poc69s8sO08&list=PLqbWuGdVBJd0-Bd2wqieXWXfQdzyBX-gf"
                      target="_blank"
                    >
                      Youtube
                    </Link>
                  </p>
                }
              />
              <SubTitle title="담당 역할" content={webtoonRole()} />
            </div>
            <Image
              src="/img/webtoon.png"
              alt="/img/webtoon.png"
              width={400}
              height="200"
            />
            {/*             format="webp"
            fit="contain" */}
          </div>
        </CardBody>
      </Card>

      <Card className="box-card mt-5">
        <CardBody>
          <CardHeader>
            <p className="font-bold">중간거리 약속잡기(혼디모앙)</p>
          </CardHeader>
          <div className="flex gap-5 justify-between sm:flex-wrap-reverse xs:flex-wrap-reverse sm:justify-center">
            <div>
              <SubTitle title="기간" content={<p>2021.03 ~ 2021.07</p>} />

              <SubTitle
                title="Skill"
                content={<p>HTML5, CSS3, JavaScript</p>}
              />

              <SubTitle
                title="URL"
                content={
                  <p className="flex gap-2">
                    <Link
                      type="success"
                      href="https://github.com/hyunjunyong/middle-location-pg"
                      target="_blank"
                    >
                      <span>Git</span>
                    </Link>
                    <Link
                      type="success"
                      href="https://hyunjunyong.github.io/middle-location-pg/"
                      target="_blank"
                    >
                      Page
                    </Link>
                  </p>
                }
              />
              <SubTitle title="담당 역할" content={middleRole()} />
              <SubTitle title="성과" content={middleResult()} />
            </div>
            <Image
              src="/img/middle-location.png"
              alt="/img/middle-location.png"
              width={400}
              height="200"
            />
            {/*             format="webp"
            fit="contain" */}
          </div>
        </CardBody>
      </Card>

      <Card className="box-card mt-5">
        <CardBody>
          <CardHeader>
            <p className="font-bold">제주대학교 소개 웹사이트</p>
          </CardHeader>
          <div className="flex gap-5 justify-between sm:flex-wrap-reverse xs:flex-wrap-reverse sm:justify-center">
            <div>
              <SubTitle title="기간" content={<p>2020.12 ~ 2021.01</p>} />

              <SubTitle
                title="Skill"
                content={<p>HTML5, CSS3, JavaScript</p>}
              />

              <SubTitle
                title="URL"
                content={
                  <p className="flex gap-2">
                    <Link
                      type="success"
                      href="https://github.com/hyunjunyong/jeju242.github.io"
                      target="_blank"
                    >
                      Git
                    </Link>
                    <Link
                      type="success"
                      href="https://jeju242.github.io/"
                      target="_blank"
                    >
                      Page
                    </Link>
                  </p>
                }
              />
              <SubTitle title="담당 역할" content={jejuRole()} />
              <SubTitle
                title="성과"
                content={<p>카카오 주관 팀 프로젝트 완성</p>}
              />
            </div>
            <Image
              src="/img/jeju.png"
              alt="/img/jeju.png"
              width={400}
              height="200"
            />
            {/*             format="webp"
            fit="contain" */}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
