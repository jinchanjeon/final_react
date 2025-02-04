import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Box, IconButton, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import MgSide from "./MgSide";
import logo from './assets/로고.png';

function App() {

  return (
    <>
      <Box display={"flex"}>
        <MgSide />
        <Box  padding={"30px"} width={"90%"}>
          <Outlet />
          <Box display={"flex"}>
            <img src={logo}  style={{width:"100px"}}/>
            <h2>404 NOT COFFEE</h2>
          </Box>
          <Box display={"flex"}>
          
            <Typography >
              우리의 ERP 시스템은 다양한 가맹점의 정보를 통합 관리하고, 운영 효율성을 높이는 데 도움을 줍니다. 
              이 시스템을 통해 가맹점의 실시간 상태를 파악하고, 재고 관리, 매출 분석 등 다양한 기능을 제공합니다.
            </Typography>
          </Box>
          <br></br>
          <Box>
            <Box display={"flex"}>
              <IconButton>
                <ArrowRightIcon />
              </IconButton>
              <h3>주요 기능</h3>
            </Box>
            <Typography >
              <ul>
                <li>가맹점 정보 관리: 가맹점의 주소, 연락처, 담당자 등의 정보를 한 곳에서 관리합니다.</li>
                <li>매출 분석: 가맹점별 매출 데이터를 실시간으로 분석하고, 트렌드를 파악할 수 있습니다.</li>
                <li>재고 관리: 가맹점별 재고 현황을 실시간으로 모니터링하고, 부족한 재고를 자동으로 알림을 보냅니다.</li>
                <li>가맹점 통합 대시보드: 모든 가맹점의 상태를 한 눈에 확인할 수 있는 대시보드를 제공합니다.</li>
              </ul>
            </Typography>
          </Box>

        </Box>

      </Box>

    </>
  )
}

export default App
