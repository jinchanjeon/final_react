import React from 'react'
import MgSide from "./MgSide";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import baekjongwon from './assets/백종원.png';

function Sumin() {
  return (
    <>
      <Box display={"flex"}>
        <MgSide />
        <Box padding={"30px"} width={"90%"}>
          <Outlet />
          <h3>
            <em>"커피로 연결된 행복, 모두가 함께 만드는 미래."</em>
          </h3>
          
          <Box display="flex" gap={4}>
            <Box>
              <img src={baekjongwon} alt="백종원" style={{width:"300px"}}/>
            </Box>
            <Box>
              <ul>
                <li>고객 중심</li>
                우리는 고객에게 최고의 커피와 경험을 제공하는 것을 최우선으로 합니다. 고객의 목소리를 듣고 그들의 만족을 우리의 성장으로 연결시킵니다.
                <li>상생과 협력</li>
                가맹점과의 동반 성장을 최우선으로 하며, 투명한 운영과 지원 시스템을 통해 함께 번영합니다. 성공은 공유될 때 더욱 빛납니다.
                <li>혁신과 도전</li>
                항상 새로운 메뉴와 서비스를 연구하고, 커피 문화의 선두 주자로서 끊임없이 혁신하며 도전을 멈추지 않습니다.
                <li>지속 가능성</li>
                환경을 생각하는 커피 문화를 만들어갑니다. 친환경 재료와 에너지 효율적인 시스템을 통해 지속 가능한 미래를 지원합니다.
                <li>열린 소통</li>
                본사와 가맹점, 직원과 고객 간의 열린 소통을 통해 신뢰와 유대감을 강화합니다. 서로의 의견을 존중하고 경청합니다.
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Sumin
