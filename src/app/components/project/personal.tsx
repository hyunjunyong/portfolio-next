'use client';

import { useState, useEffect } from 'react';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import subTitle from '../layout/subTitle';
export default function Personal() {
  return (
    <div>
      <p className="text-center text-2xl xs:text-xl font-bold xs:font-semibold">
        개인 프로젝트
      </p>
      <Card>
        <CardBody>
          {/* <div className="font-bold">
            <p>웹툰 사이트</p>
          </div>
          <div className="flex gap-5 justify-between sm:flex-wrap-reverse xs:flex-wrap-reverse sm:justify-center">
          <div>
            <subTitle>
              <template #title>기간</template>
              <template #content>
                <p>2021.09 ~ 2021.12</p>
              </template>
            </subTitle>

            <subTitle>
              <template #title>Skill</template>
              <template #content>
                <p>Vue2, Vuetify , Vuex</p>
              </template>
            </subTitle>

            <subTitle>
              <template #title>URL</template>
              <template #content>
                <p className="flex gap-2">
                  <el-link
                    type="success"
                    href="https://github.com/hyunjunyong/WEBTOON/"
                    target="_blank"
                  >
                    Git
                  </el-link>
                  <el-link
                    type="success"
                    href="https://www.youtube.com/watch?v=Poc69s8sO08&list=PLqbWuGdVBJd0-Bd2wqieXWXfQdzyBX-gf"
                    target="_blank"
                  >
                    Youtube
                  </el-link>
                </p>
              </template>
            </subTitle>

            <subTitle>
              <template #title>담당 역할</template>
              <template #content>
                <p>백엔드와 api 연동</p>
                <p>작가홈, 웹툰홈 페이지 제작 및 디자인</p>
              </template>
            </subTitle>
          </div>
          <nuxt-img
            src="/img/webtoon.png"
            alt="/img/webtoon.png"
            format="webp"
            fit="contain"
            width="400"
            height="200"
          />
        </div> */}
        </CardBody>
      </Card>

      {/* 
      <el-card className="box-card mt-5">
        <template #header>
          
        </template>
        
      </el-card>
      <el-card className="box-card mt-5">
        <template #header>
          <div className="font-bold">
            <p>중간거리 약속잡기(혼디모앙)</p>
          </div>
        </template>
        <div className="flex gap-5 justify-between sm:flex-wrap-reverse xs:flex-wrap-reverse sm:justify-center">
          <div>
            <subTitle>
              <template #title>기간</template>
              <template #content>
                <p>2021.03 ~ 2021.07</p>
              </template>
            </subTitle>
            <subTitle>
              <template #title>Skill</template>
              <template #content>
                <p>HTML5, CSS3, JavaScript</p>
              </template>
            </subTitle>
            <subTitle>
              <template #title>URL</template>
              <template #content>
                <p className="flex gap-2">
                  <el-link
                    type="success"
                    href="https://github.com/hyunjunyong/middle-location-pg"
                    target="_blank"
                  >
                    <span>Git</span>
                  </el-link>
                  <el-link
                    type="success"
                    href="https://hyunjunyong.github.io/middle-location-pg/"
                    target="_blank"
                  >
                    Page
                  </el-link>
                </p>
              </template>
            </subTitle>
          </div>
          <div>
            <subTitle>
              <template #title>담당 역할</template>
              <template #content>
                <p>페이지 퍼블리싱</p>
                <p>사용자에게 주변 추천 장소 기능 추가</p>
                <p>각 사용자에 위치에서 교통편 및 거리 api 연동</p>
                <p>장소 추천 api 연동</p>
              </template>
            </subTitle>
            <subTitle>
              <template #title>성과</template>
              <template #content>
                <p>2021.07 스마트SW경진대회(최우수상 수상)</p>
                <p>2021.10 Sw중심대학 공동창업 camp(대상 수상)</p>
              </template>
            </subTitle>
          </div>
          <nuxt-img
            src="/img/middle-location.png"
            alt="/img/middle-location.png"
            format="webp"
            fit="contain"
            width="400"
            height="200"
          />
        </div>
      </el-card>
      <el-card className="box-card mt-5">
        <template #header>
          <div className="font-bold">
            <p>제주대학교 소개 웹사이트</p>
          </div>
        </template>
        <div className="flex justify-between gap-5 sm:flex-wrap-reverse sm:justify-center">
          <div>
            <subTitle>
              <template #title>기간</template>
              <template #content>
                <p>2020.12 ~ 2021.01</p>
              </template>
            </subTitle>
            <subTitle>
              <template #title>Skill</template>
              <template #content>
                <p>HTML5, CSS3, JavaScript</p>
              </template>
            </subTitle>

            <subTitle>
              <template #title>URL</template>
              <template #content>
                <p className="flex gap-2">
                  <el-link
                    type="success"
                    href="https://github.com/hyunjunyong/jeju242.github.io"
                    target="_blank"
                  >
                    Git
                  </el-link>
                  <el-link
                    type="success"
                    href="https://jeju242.github.io/"
                    target="_blank"
                  >
                    Page
                  </el-link>
                </p>
              </template>
            </subTitle>

            <subTitle>
              <template #title>담당 역할</template>
              <template #content>
                <p>제주대학교 소개하는 간단한 퀴즈 기능 구현</p>
                <p>댓글 Discuss Api연동</p>
              </template>
            </subTitle>

            <subTitle>
              <template #title>성과</template>
              <template #content>
                <p>카카오 주관 팀 프로젝트 완성</p>
              </template>
            </subTitle>
          </div>
          <nuxt-img
            src="/img/jeju.png"
            alt="/img/jeju.png"
            format="webp"
            width="400"
            height="200"
            fit="contain"
          />
        </div>
      </el-card> */}
    </div>
  );
}
