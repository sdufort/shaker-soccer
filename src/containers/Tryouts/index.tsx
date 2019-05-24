import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ShakerTable from "../../components/ShakerTable";
import {
  jvMetrics,
  jvMetricsData,
  jvMonday,
  jvMondayData,
  jvTuesday,
  jvTuesdayData,
  jvWednesday,
  jvWednesdayData,
  jvThursday,
  jvThursdayData
} from "./jvMetrics";
import {
  mod7Metrics,
  mod7MetricsData,
  mod7Monday,
  mod7MondayData,
  mod7Tuesday,
  mod7TuesdayData,
  mod7Wednesday,
  mod7WednesdayData,
  mod7Thursday,
  mod7ThursdayData,
  mod7Friday,
  mod7FridayData,
  mod7Tuesday3,
  mod7Tuesday3Data,
  mod7Wednesday4,
  mod7Wednesday4Data
} from "./mod7Metrics";
import {
  mod9Metrics,
  mod9MetricsData,
  mod9Monday,
  mod9MondayData,
  mod9Tuesday,
  mod9TuesdayData,
  mod9Wednesday,
  mod9WednesdayData,
  mod9Thursday,
  mod9ThursdayData,
  mod9Friday,
  mod9FridayData,
  mod9Tuesday3,
  mod9Tuesday3Data,
  mod9Wednesday4,
  mod9Wednesday4Data
} from "./mod9Metrics";
import {
  varsityMetrics,
  varsityMetricsData,
  varsityMonday,
  varsityMondayData,
  varsityTuesday,
  varsityTuesdayData,
  varsityWednesday,
  varsityWednesdayData
} from "./varsityMetrics";
import {
  ContentContainer,
  StyledEP,
  StyledEPDetails,
  StyledEPSummary,
  StyledTypography,
  Title,
  TryoutContainer,
  TryoutDate,
  TryoutDay,
  TryoutSchedule,
  TryoutSessions
} from "./style";

const Tryouts: React.FC = () => {
  return (
    <TryoutContainer>
      <Title>2019 Tryout Metrics</Title>
      <ContentContainer>
        <div>
          <StyledEP defaultExpanded>
            <StyledEPSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <StyledTypography>Varsity</StyledTypography>
            </StyledEPSummary>
            <StyledEPDetails>
              Potential soccer players entering grades 11 and 12 in the fall.
              Any potential soccer players entering grades 9 and 10 must be
              invited to tryout for varsity.
            </StyledEPDetails>
            <StyledEPDetails>
              All tryouts are mandatory and at Blue Creek Elementary, directly
              behind the high school - 100 Clinton Road, Latham, NY 12110.
            </StyledEPDetails>
            <StyledEPDetails>
              Teams will be selected in person at the conclusion of Wednesday.
            </StyledEPDetails>
            <StyledEPDetails>
              <TryoutSchedule>
                <TryoutDay>
                  <ShakerTable
                    columns={varsityMonday}
                    data={varsityMondayData}
                  />
                </TryoutDay>
                <TryoutDay>
                  <ShakerTable
                    columns={varsityTuesday}
                    data={varsityTuesdayData}
                  />
                </TryoutDay>
                <TryoutDay>
                  <ShakerTable
                    columns={varsityWednesday}
                    data={varsityWednesdayData}
                  />
                </TryoutDay>
              </TryoutSchedule>
              <ShakerTable columns={varsityMetrics} data={varsityMetricsData} />
            </StyledEPDetails>
          </StyledEP>
          <StyledEP>
            <StyledEPSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <StyledTypography>Junior Varsity</StyledTypography>
            </StyledEPSummary>
            <StyledEPDetails>
              Potential soccer players entering grades 10 in the fall. Any
              potential soccer players entering grades 8 and 9 must be invited
              to tryout for JV.
            </StyledEPDetails>
            <StyledEPDetails>
              All tryouts are mandatory and at Blue Creek Elementary, directly
              behind the high school - 100 Clinton Road, Latham, NY 12110.
            </StyledEPDetails>
            <StyledEPDetails>
              Teams will be selected in person at the conclusion of Wednesday.
            </StyledEPDetails>
            <StyledEPDetails>
              <TryoutSchedule>
                <TryoutDay>
                  <ShakerTable columns={jvMonday} data={jvMondayData} />
                </TryoutDay>
                <TryoutDay>
                  <ShakerTable columns={jvTuesday} data={jvTuesdayData} />
                </TryoutDay>
                <TryoutDay>
                  <ShakerTable columns={jvWednesday} data={jvWednesdayData} />
                </TryoutDay>
                <TryoutDay>
                  <ShakerTable columns={jvThursday} data={jvThursdayData} />
                </TryoutDay>
              </TryoutSchedule>
              <ShakerTable columns={jvMetrics} data={jvMetricsData} />
            </StyledEPDetails>
          </StyledEP>
          <StyledEP>
            <StyledEPSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <StyledTypography>Modified 9</StyledTypography>
            </StyledEPSummary>
            <StyledEPDetails>
              Potential soccer players entering grade 9 in the fall. Any
              potential soccer players entering grade 8 must be invited to
              tryout for Modified 9.
            </StyledEPDetails>
            <StyledEPDetails>
              All tryouts are mandatory and at Blue Creek Elementary, directly
              behind the high school - 100 Clinton Road, Latham, NY 12110.
            </StyledEPDetails>
            <StyledEPDetails>
              Teams will be selected in person at the conclusion of Wednesday.
            </StyledEPDetails>
            <StyledEPDetails>
              <TryoutSchedule>
                <TryoutDay>
                  <ShakerTable columns={mod9Monday} data={mod9MondayData} />
                </TryoutDay>
                <TryoutDay>
                  <ShakerTable columns={mod9Tuesday} data={mod9TuesdayData} />
                </TryoutDay>
                <TryoutDay>
                  <ShakerTable
                    columns={mod9Wednesday}
                    data={mod9WednesdayData}
                  />
                </TryoutDay>
                <TryoutDay>
                  <ShakerTable columns={mod9Thursday} data={mod9ThursdayData} />
                </TryoutDay>
                <TryoutDay>
                  <ShakerTable columns={mod9Friday} data={mod9FridayData} />
                </TryoutDay>
                <TryoutDay>
                  <ShakerTable columns={mod9Tuesday3} data={mod9Tuesday3Data} />
                </TryoutDay>
                <TryoutDay>
                  <ShakerTable
                    columns={mod9Wednesday4}
                    data={mod9Wednesday4Data}
                  />
                </TryoutDay>
              </TryoutSchedule>
              <ShakerTable columns={mod9Metrics} data={mod9MetricsData} />
            </StyledEPDetails>
          </StyledEP>
          <StyledEP>
            <StyledEPSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <StyledTypography>Modified 7</StyledTypography>
            </StyledEPSummary>
            <StyledEPDetails>
              Potential soccer players entering grades 7 and 8 in the fall.
            </StyledEPDetails>
            <StyledEPDetails>
              All tryouts are mandatory and at Blue Creek Elementary, directly
              behind the high school - 100 Clinton Road, Latham, NY 12110.
            </StyledEPDetails>
            <StyledEPDetails>
              Teams will be selected in person at the conclusion of Wednesday.
            </StyledEPDetails>
            <StyledEPDetails>
              <TryoutSchedule>
                <TryoutDay>
                  <ShakerTable columns={mod7Monday} data={mod7MondayData} />
                </TryoutDay>
                <TryoutDay>
                  <ShakerTable columns={mod7Tuesday} data={mod7TuesdayData} />
                </TryoutDay>
                <TryoutDay>
                  <ShakerTable
                    columns={mod7Wednesday}
                    data={mod7WednesdayData}
                  />
                </TryoutDay>
                <TryoutDay>
                  <ShakerTable columns={mod7Thursday} data={mod7ThursdayData} />
                </TryoutDay>
                <TryoutDay>
                  <ShakerTable columns={mod7Friday} data={mod7FridayData} />
                </TryoutDay>
                <TryoutDay>
                  <ShakerTable columns={mod7Tuesday3} data={mod7Tuesday3Data} />
                </TryoutDay>
                <TryoutDay>
                  <ShakerTable
                    columns={mod7Wednesday4}
                    data={mod7Wednesday4Data}
                  />
                </TryoutDay>
              </TryoutSchedule>
              <ShakerTable columns={mod7Metrics} data={mod7MetricsData} />
            </StyledEPDetails>
          </StyledEP>
        </div>
      </ContentContainer>
    </TryoutContainer>
  );
};

export default Tryouts;
