import React, { Component } from "react";
import clone from "clone";
import { Row, Col } from "antd";
import basicStyle from "../../config/basicStyle";
import IsoWidgetsWrapper from "./widgets-wrapper";
import IsoWidgetBox from "./widget-box";
import CardWidget from "./card/card-widgets";
import ProgressWidget from "./progress/progress-widget";
import SingleProgressWidget from "./progress/progress-single";
import ReportsWidget from "./report/report-widget";
import StickerWidget from "./sticker/sticker-widget";
import SaleWidget from "./sale/sale-widget";
import VCardWidget from "./vCard/vCard-widget";
import SocialWidget from "./social-widget/social-widget";
import SocialProfile from "./social-widget/social-profile-icon";
import userpic from "../../image/user1.png";
import { TableViews, tableinfos, dataList } from "../Tables/antTables";
import * as rechartConfigs from "../Charts/recharts/config";
import { StackedAreaChart } from "../Charts/recharts/charts/";
import { GoogleChart } from "../Charts/googleChart/";
import * as googleChartConfigs from "../Charts/googleChart/config";

const tableDataList = clone(dataList);
tableDataList.size = 5;

export default class IsoWidgets extends Component {
  render() {
    const { rowStyle, colStyle } = basicStyle;
    const wisgetPageStyle = {
      display: "flex",
      flexFlow: "row wrap",
      alignItems: "flex-start",
      padding: "15px"
    };

    const chartEvents = [
      {
        eventName: "select",
        callback(Chart) {
          console.log("Selected ", Chart.chart.getSelection());
        }
      }
    ];

    const stackConfig = {
      ...rechartConfigs.StackedAreaChart,
      width: window.innerWidth < 450 ? 300 : 500
    };
    return (
      <div style={wisgetPageStyle}>
        <Row style={rowStyle} gutter={0} justify="start">
          <Col md={8} sm={24} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* Report Widget */}
              <ReportsWidget
                label="Income"
                details="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"
              >
                <SingleProgressWidget
                  label="Marketing"
                  percent={70}
                  barHeight={7}
                  status="active"
                  info={true}
                />
                <SingleProgressWidget
                  label="Addvertisement"
                  percent={80}
                  barHeight={7}
                  status="active"
                  info={true}
                />
                <SingleProgressWidget
                  label="Consulting"
                  percent={40}
                  barHeight={7}
                  status="active"
                  info={true}
                />
                <SingleProgressWidget
                  label="Development"
                  percent={60}
                  barHeight={7}
                  status="active"
                  info={true}
                />
              </ReportsWidget>
            </IsoWidgetsWrapper>
          </Col>

          <Col md={16} sm={24} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              <IsoWidgetBox>
                {/* TABLE */}
                <TableViews.SimpleView
                  tableInfo={tableinfos[0]}
                  dataList={tableDataList}
                />
              </IsoWidgetBox>
            </IsoWidgetsWrapper>
          </Col>
        </Row>

        <Row style={rowStyle} gutter={0} justify="start">
          <Col md={6} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* Sticker Widget */}
              <StickerWidget
                number="210"
                text="Unread Email"
                icon="ion-email-unread"
                fontColor="#ffffff"
                bgColor="#7266BA"
              />
            </IsoWidgetsWrapper>
          </Col>

          <Col md={6} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* Sticker Widget */}
              <StickerWidget
                number="1749"
                text="Image Upload"
                icon="ion-android-camera"
                fontColor="#ffffff"
                bgColor="#42A5F6"
              />
            </IsoWidgetsWrapper>
          </Col>

          <Col md={6} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* Sticker Widget */}
              <StickerWidget
                number="3024"
                text="Total Message"
                icon="ion-chatbubbles"
                fontColor="#ffffff"
                bgColor="#7ED320"
              />
            </IsoWidgetsWrapper>
          </Col>

          <Col md={6} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* Sticker Widget */}
              <StickerWidget
                number="54"
                text="Orders Post"
                icon="ion-android-cart"
                fontColor="#ffffff"
                bgColor="#F75D81"
              />
            </IsoWidgetsWrapper>
          </Col>
        </Row>

        <Row style={rowStyle} gutter={0} justify="start">
          <Col md={6} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* Sale Widget */}
              <SaleWidget
                label="Income"
                price="$15000"
                fontColor="#F75D81"
                details="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"
              />
            </IsoWidgetsWrapper>
          </Col>

          <Col md={6} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* Sale Widget */}
              <SaleWidget
                label="Income"
                price="$15000"
                fontColor="#F75D81"
                details="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"
              />
            </IsoWidgetsWrapper>
          </Col>

          <Col md={6} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* Sale Widget */}
              <SaleWidget
                label="Income"
                price="$15000"
                fontColor="#F75D81"
                details="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"
              />
            </IsoWidgetsWrapper>
          </Col>

          <Col md={6} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* Sale Widget */}
              <SaleWidget
                label="Income"
                price="$15000"
                fontColor="#F75D81"
                details="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"
              />
            </IsoWidgetsWrapper>
          </Col>
        </Row>

        <Row style={rowStyle} gutter={0} justify="start">
          <Col md={6} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper gutterBottom={20}>
              {/* Card Widget */}
              <CardWidget
                icon="ion-android-chat"
                iconcolor="#42A5F5"
                number="110"
                text="New Messages"
              />
            </IsoWidgetsWrapper>

            <IsoWidgetsWrapper gutterBottom={20}>
              {/* Card Widget */}
              <CardWidget
                icon="ion-music-note"
                iconcolor="#F75D81"
                number="100%"
                text="Volume"
              />
            </IsoWidgetsWrapper>

            <IsoWidgetsWrapper>
              {/* Card Widget */}
              <CardWidget
                icon="ion-trophy"
                iconcolor="#FEAC01"
                number="137"
                text="Achievement"
              />
            </IsoWidgetsWrapper>
          </Col>

          <Col md={6} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper gutterBottom={20}>
              {/* Progress Widget */}
              <ProgressWidget
                label="Download"
                icon="ion-archive"
                iconcolor="#222222"
                details="90% Responsive"
                percent={50}
                barHeight={7}
                status="active"
              />
            </IsoWidgetsWrapper>

            <IsoWidgetsWrapper gutterBottom={20}>
              {/* Progress Widget */}
              <ProgressWidget
                label="Support"
                icon="ion-pie-graph"
                iconcolor="#222222"
                details="90% Responsive"
                percent={80}
                barHeight={7}
                status="active"
              />
            </IsoWidgetsWrapper>

            <IsoWidgetsWrapper>
              {/* Progress Widget */}
              <ProgressWidget
                label="Download"
                icon="ion-android-download"
                iconcolor="#222222"
                details="90% Responsive"
                percent={40}
                barHeight={7}
                status="active"
              />
            </IsoWidgetsWrapper>
          </Col>

          <Col md={12} sm={24} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              <IsoWidgetBox height={455}>
                <StackedAreaChart {...stackConfig} />
              </IsoWidgetBox>
            </IsoWidgetsWrapper>
          </Col>
        </Row>

        <Row style={rowStyle} gutter={0} justify="start">
          <Col md={12} sm={24} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              <IsoWidgetBox height={470}>
                <GoogleChart
                  {...googleChartConfigs.BarChart}
                  chartEvents={chartEvents}
                />
              </IsoWidgetBox>
            </IsoWidgetsWrapper>
          </Col>

          <Col md={12} sm={24} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              <IsoWidgetBox height={470}>
                <GoogleChart {...googleChartConfigs.Histogram} />
              </IsoWidgetBox>
            </IsoWidgetsWrapper>
          </Col>
        </Row>

        <Row style={rowStyle} gutter={0} justify="start">
          <Col md={8} sm={24} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* Chart */}
              <IsoWidgetBox height={450}>
                <GoogleChart {...googleChartConfigs.TrendLines} />
              </IsoWidgetBox>
            </IsoWidgetsWrapper>
          </Col>

          <Col md={8} sm={24} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              <IsoWidgetBox height={450}>
                {/* Google Bar Chart */}
                <GoogleChart {...googleChartConfigs.ComboChart} />
              </IsoWidgetBox>
            </IsoWidgetsWrapper>
          </Col>

          <Col md={8} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* VCard Widget */}
              <VCardWidget
                style={{ height: "450px" }}
                src={userpic}
                alt="Jhon"
                name="Chen Mu"
                title="Developer"
                description="Good, better, best. Never let it rest. Until your good is better, and your better is best."
              >
                <SocialWidget>
                  <SocialProfile
                    url="#"
                    icon="ion-social-facebook"
                    iconcolor="#3b5998"
                  />
                  <SocialProfile
                    url="#"
                    icon="ion-social-twitter"
                    iconcolor="#00aced"
                  />
                  <SocialProfile
                    url="#"
                    icon="ion-social-googleplus"
                    iconcolor="#dd4b39"
                  />
                  <SocialProfile
                    url="#"
                    icon="ion-social-linkedin-outline"
                    iconcolor="#007bb6"
                  />
                  <SocialProfile
                    url="#"
                    icon="ion-social-dribbble-outline"
                    iconcolor="#ea4c89"
                  />
                </SocialWidget>
              </VCardWidget>
            </IsoWidgetsWrapper>
          </Col>
        </Row>
      </div>
    );
  }
}
