import { VercelRequest, VercelResponse } from "@vercel/node";
import convert, { xml2js } from "xml-js";
import { handlerStation } from "../utils/convertXMLtoJSON.util";
import { response } from "../utils/response.util";

const test = async (req: VercelRequest, res: VercelResponse) => {
  const xml = `
  <StationList xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:add="http://www.govtalk.gov.uk/people/AddressAndPersonalDetails" xmlns:com="http://nationalrail.co.uk/xml/common" xmlns="http://nationalrail.co.uk/xml/station" xsi:schemaLocation="http://internal.nationalrail.co.uk/xml/XsdSchemas/External/Version4.0/nre-station-v4-0.xsd">
  <Station xsi:schemaLocation="http://internal.nationalrail.co.uk/xml/XsdSchemas/External/Version4.0/nre-station-v4-0.xsd">
<ChangeHistory>
<com:ChangedBy>s_king_TfW</com:ChangedBy>
<com:LastChangedDate>2021-04-23T00:00:00.000+01:00</com:LastChangedDate>
</ChangeHistory>
<CrsCode>ABE</CrsCode>
<AlternativeIdentifiers>
<NationalLocationCode>381300</NationalLocationCode>
</AlternativeIdentifiers>
<Name>Aber</Name>
<SixteenCharacterName>ABER</SixteenCharacterName>
<Address>
<com:PostalAddress>
<add:A_5LineAddress>
<add:Line>Aber station</add:Line>
<add:Line>Nantgarw Road</add:Line>
<add:Line>Aber</add:Line>
<add:Line>Caerphilly</add:Line>
<add:PostCode>CF83 1AQ</add:PostCode>
</add:A_5LineAddress>
</com:PostalAddress>
</Address>
<Longitude>-3.229838935</Longitude>
<Latitude>51.57496069</Latitude>
<StationOperator>AW</StationOperator>
<Staffing>
<StaffingLevel>partTime</StaffingLevel>
<ClosedCircuitTelevision>
<Available>true</Available>
</ClosedCircuitTelevision>
</Staffing>
<InformationSystems>
<InformationAvailableFromStaff>-1</InformationAvailableFromStaff>
<InformationServicesOpen>
<com:Annotation>
<com:Note>
<![CDATA[ Same as ticket office opening times ]]>
</com:Note>
</com:Annotation>
</InformationServicesOpen>
<CIS>DepartureScreens</CIS>
<CIS>ArrivalScreens</CIS>
<CustomerHelpPoints>
<com:Available>false</com:Available>
</CustomerHelpPoints>
</InformationSystems>
<Fares>
<TicketOffice>
<com:Available>false</com:Available>
</TicketOffice>
<TicketMachine>
<Available>false</Available>
</TicketMachine>
<OystercardIssued>false</OystercardIssued>
<UseOystercard>false</UseOystercard>
<AlwaysShowOysterCardFields>false</AlwaysShowOysterCardFields>
<SmartcardIssued>false</SmartcardIssued>
<SmartcardValidator>true</SmartcardValidator>
<SmartcardComments>
<com:Note>
<![CDATA[ <p>Load a pre-purchased season ticket onto a smartcard using the smartcard validator. </p> ]]>
</com:Note>
</SmartcardComments>
<PenaltyFares>
<Url>https://tfwrail.wales/policies-and-reports/revenue-protection-policy</Url>
</PenaltyFares>
</Fares>
<PassengerServices>
<CustomerService>
<com:Annotation>
<com:Note>
<![CDATA[ Contact our Customer Relations team directly via the customer webform at <a href="https://tfwrail.wales">www.tfwrail.wales</a> ]]>
</com:Note>
</com:Annotation>
</CustomerService>
<LeftLuggage>
<com:ContactDetails>
<com:Url>https://www.nationalrail.co.uk/</com:Url>
</com:ContactDetails>
<com:Available>false</com:Available>
</LeftLuggage>
<LostProperty>
<com:ContactDetails>
<com:PrimaryTelephoneNumber>
<com:TelNationalNumber>03333 211 202</com:TelNationalNumber>
</com:PrimaryTelephoneNumber>
<com:Url>https://www.nationalrail.co.uk/</com:Url>
</com:ContactDetails>
<com:Available>true</com:Available>
<com:OperatorName>
<![CDATA[ <a href="https://tfw.missingx.com/">Transport for Wales</a> ]]>
</com:OperatorName>
</LostProperty>
</PassengerServices>
<StationFacilities>
<FirstClassLounge>
<com:Available>false</com:Available>
</FirstClassLounge>
<SeatedArea>
<com:Available>false</com:Available>
</SeatedArea>
<WaitingRoom>
<com:Available>false</com:Available>
</WaitingRoom>
<Trolleys>
<com:Available>false</com:Available>
</Trolleys>
<StationBuffet>
<com:Available>false</com:Available>
</StationBuffet>
<Toilets>
<com:Available>false</com:Available>
</Toilets>
<BabyChange>
<com:Available>false</com:Available>
</BabyChange>
<Showers>
<com:Available>false</com:Available>
</Showers>
<Telephones>
<com:Exists>true</com:Exists>
<com:UsageType>CardsAndCoins</com:UsageType>
</Telephones>
<WiFi>
<com:Annotation>
<com:Note>
<![CDATA[ <p><a href="https://www.btwifi.co.uk/find/" target="_blank" rel="nofollow">Find WiFi Hotspots around Aber station</a></p> ]]>
</com:Note>
</com:Annotation>
<com:Available>false</com:Available>
</WiFi>
<WebKiosk>
<com:Available>false</com:Available>
</WebKiosk>
<PostBox>
<com:Available>false</com:Available>
</PostBox>
<TouristInformation>
<com:Available>false</com:Available>
</TouristInformation>
<AtmMachine>
<com:Available>false</com:Available>
</AtmMachine>
<BureauDeChange>
<com:Available>false</com:Available>
</BureauDeChange>
<Shops>
<com:Available>false</com:Available>
</Shops>
</StationFacilities>
<Accessibility>
<Helpline>
<com:ContactDetails>
<com:Annotation>
<com:Note>
<![CDATA[ 03333 211202 ]]>
</com:Note>
</com:Annotation>
<com:Url>https://www.nationalrail.co.uk/</com:Url>
</com:ContactDetails>
<com:Open>
<com:DayAndTimeAvailability>
<com:DayTypes>
<com:MondayToSunday>true</com:MondayToSunday>
</com:DayTypes>
<com:OpeningHours>
<com:OpenPeriod>
<com:StartTime>08:00:00.000</com:StartTime>
<com:EndTime>20:00:00.000</com:EndTime>
</com:OpenPeriod>
</com:OpeningHours>
</com:DayAndTimeAvailability>
</com:Open>
</Helpline>
<StaffHelpAvailable>
<com:Annotation>
<com:Note>
<![CDATA[ <span style="font-size: 16px;"><span style="font-size: 14px;"><span style="font-size: 12px;">No platform staff available. Assistance is provided by the Conductor on the train.</span></span></span> ]]>
</com:Note>
</com:Annotation>
<com:Available>true</com:Available>
</StaffHelpAvailable>
<InductionLoop>true</InductionLoop>
<AccessibleTicketMachines>
<com:Annotation>
<com:Note>
<![CDATA[ <p>The ticket machine takes debit and credit cards only. </p> ]]>
</com:Note>
</com:Annotation>
<com:Available>true</com:Available>
</AccessibleTicketMachines>
<HeightAdjustedTicketOfficeCounter>
<com:Available>true</com:Available>
</HeightAdjustedTicketOfficeCounter>
<RampForTrainAccess>
<com:Available>true</com:Available>
</RampForTrainAccess>
<NearestStationsWithMoreFacilities>
<com:CrsCode>ECP</com:CrsCode>
<com:CrsCode>YSM</com:CrsCode>
</NearestStationsWithMoreFacilities>
<NationalKeyToilets>
<com:Available>false</com:Available>
</NationalKeyToilets>
<StepFreeAccess>
<com:Annotation>
<com:Note>
<![CDATA[ <p><span style="font-size:16px"><span style="font-size:16px"><span style="font-size:14px"><span style="font-size:12px">Category B1</span></span></span></span></p> <p><span style="font-size:16px"><span style="font-size:16px"><span style="font-size:14px"><span style="font-size:12px">Wheelchair users, mobility scooter users and customers with reduced mobility may find the steep ramps leading from Nantgarw Road to both platforms difficult to negotiate.</span></span></span></span></p> <p><span style="font-size:16px"><span style="font-size:16px"><span style="font-size:14px"><span style="font-size:12px"><span style="font-size:12pt; line-height:107%"><span style="font-size:12px">Find out more information here&nbsp;</span></span><a href="https://tfwrail.wales/before-your-journey/accessible-travel/station-accessibility" originalattribute="href" originalpath="https://tfwrail.wales/before-your-journey/accessible-travel/station-accessibility"><span style="font-size:12pt; line-height:107%"><span style="font-size:12px">https://tfwrail.wales/before-your-journey/accessible-travel/station-accessibility</span></span></a> </span></span></span></span></p> <p>&nbsp;</p> ]]>
</com:Note>
</com:Annotation>
<Coverage>wholeStation</Coverage>
</StepFreeAccess>
<ImpairedMobilitySetDown>
<com:Available>false</com:Available>
</ImpairedMobilitySetDown>
<WheelchairsAvailable>
<com:Available>false</com:Available>
</WheelchairsAvailable>
</Accessibility>
<Interchange>
<CycleStorage>
<Spaces>0</Spaces>
<Sheltered>No</Sheltered>
<Cctv>true</Cctv>
</CycleStorage>
<CarPark>
<com:ContactDetails>
<com:PostalAddress>
<add:Line>-</add:Line>
<add:Line>-</add:Line>
</com:PostalAddress>
<com:Url>https://www.nationalrail.co.uk/</com:Url>
</com:ContactDetails>
<com:Open>
<com:DayAndTimeAvailability>
<com:DayTypes>
<com:MondayToFriday>true</com:MondayToFriday>
</com:DayTypes>
<com:OpeningHours>
<com:TwentyFourHours>true</com:TwentyFourHours>
</com:OpeningHours>
</com:DayAndTimeAvailability>
</com:Open>
<com:OperatorName>
<![CDATA[ Local Authority ]]>
</com:OperatorName>
<Name>
<![CDATA[ Station Car Park ]]>
</Name>
<Spaces>128</Spaces>
<Charges>
<Free>true</Free>
</Charges>
<NumberAccessibleSpaces>0</NumberAccessibleSpaces>
<AccessibleCarParkEquipment>true</AccessibleCarParkEquipment>
<Cctv>false</Cctv>
</CarPark>
<RailReplacementServices>
<com:Annotation>
<com:Note>
<![CDATA[ Use the bus stops under the bridge on Nantgarw Road ]]>
</com:Note>
</com:Annotation>
</RailReplacementServices>
<TaxiRank>
<com:Annotation>
<com:Note>
<![CDATA[ <p>There is no taxi rank at this station. </p> ]]>
</com:Note>
</com:Annotation>
</TaxiRank>
</Interchange>
<StationAlerts>
<AlertText>
<![CDATA[ <div style="border: 0px none currentcolor; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; margin: 0px; padding: 0px; vertical-align: baseline;"> <p class="x_MsoNormal" style="font-size: 11pt; margin: 0cm 0cm 0pt;"><span style="border: 0px none currentcolor; font-size: 12pt; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin: 0px; padding: 0px; vertical-align: baseline;">13 April 2020</span></p> <p class="x_MsoNormal" style="font-size: 11pt; margin: 0cm 0cm 0pt;"><span style="border: 0px none currentcolor; font-size: 12pt; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin: 0px; padding: 0px; vertical-align: baseline;"><br /> </span></p> <p class="x_MsoNormal" style="font-size: 11pt; margin: 0cm 0cm 0pt;"><span style="border: 0px none currentcolor; font-size: 12pt; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin: 0px; padding: 0px; vertical-align: baseline;">This ticket office is closed permanently.</span><span style="border: 0px none currentcolor; font-size: 12pt; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin: 0px; padding: 0px; vertical-align: baseline;"></span></p> </div> <span style="font-size: 15px; font-variant-numeric: normal; font-variant-east-asian: normal;"> </span> <p><span style="font-size: 12pt; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; font-weight: inherit;">To purchase a ticket, download our app TfW Rail or buy online at tfwrail.wales</span> </p> ]]>
</AlertText>
</StationAlerts>
<TrainOperatingCompanies>
<TocRef>AW</TocRef>
</TrainOperatingCompanies>
</Station>
  <Station xsi:schemaLocation="http://internal.nationalrail.co.uk/xml/XsdSchemas/External/Version4.0/nre-station-v4-0.xsd">
<ChangeHistory>
<com:ChangedBy>s_king_TfW</com:ChangedBy>
<com:LastChangedDate>2021-04-23T00:00:00.000+01:00</com:LastChangedDate>
</ChangeHistory>
<CrsCode>ABE</CrsCode>
<AlternativeIdentifiers>
<NationalLocationCode>381300</NationalLocationCode>
</AlternativeIdentifiers>
<Name>Aber</Name>
<SixteenCharacterName>ABER</SixteenCharacterName>
<Address>
<com:PostalAddress>
<add:A_5LineAddress>
<add:Line>Aber station</add:Line>
<add:Line>Nantgarw Road</add:Line>
<add:Line>Aber</add:Line>
<add:Line>Caerphilly</add:Line>
<add:PostCode>CF83 1AQ</add:PostCode>
</add:A_5LineAddress>
</com:PostalAddress>
</Address>
<Longitude>-3.229838935</Longitude>
<Latitude>51.57496069</Latitude>
<StationOperator>AW</StationOperator>
<Staffing>
<StaffingLevel>partTime</StaffingLevel>
<ClosedCircuitTelevision>
<Available>true</Available>
</ClosedCircuitTelevision>
</Staffing>
<InformationSystems>
<InformationAvailableFromStaff>-1</InformationAvailableFromStaff>
<InformationServicesOpen>
<com:Annotation>
<com:Note>
<![CDATA[ Same as ticket office opening times ]]>
</com:Note>
</com:Annotation>
</InformationServicesOpen>
<CIS>DepartureScreens</CIS>
<CIS>ArrivalScreens</CIS>
<CustomerHelpPoints>
<com:Available>false</com:Available>
</CustomerHelpPoints>
</InformationSystems>
<Fares>
<TicketOffice>
<com:Available>false</com:Available>
</TicketOffice>
<TicketMachine>
<Available>false</Available>
</TicketMachine>
<OystercardIssued>false</OystercardIssued>
<UseOystercard>false</UseOystercard>
<AlwaysShowOysterCardFields>false</AlwaysShowOysterCardFields>
<SmartcardIssued>false</SmartcardIssued>
<SmartcardValidator>true</SmartcardValidator>
<SmartcardComments>
<com:Note>
<![CDATA[ <p>Load a pre-purchased season ticket onto a smartcard using the smartcard validator. </p> ]]>
</com:Note>
</SmartcardComments>
<PenaltyFares>
<Url>https://tfwrail.wales/policies-and-reports/revenue-protection-policy</Url>
</PenaltyFares>
</Fares>
<PassengerServices>
<CustomerService>
<com:Annotation>
<com:Note>
<![CDATA[ Contact our Customer Relations team directly via the customer webform at <a href="https://tfwrail.wales">www.tfwrail.wales</a> ]]>
</com:Note>
</com:Annotation>
</CustomerService>
<LeftLuggage>
<com:ContactDetails>
<com:Url>https://www.nationalrail.co.uk/</com:Url>
</com:ContactDetails>
<com:Available>false</com:Available>
</LeftLuggage>
<LostProperty>
<com:ContactDetails>
<com:PrimaryTelephoneNumber>
<com:TelNationalNumber>03333 211 202</com:TelNationalNumber>
</com:PrimaryTelephoneNumber>
<com:Url>https://www.nationalrail.co.uk/</com:Url>
</com:ContactDetails>
<com:Available>true</com:Available>
<com:OperatorName>
<![CDATA[ <a href="https://tfw.missingx.com/">Transport for Wales</a> ]]>
</com:OperatorName>
</LostProperty>
</PassengerServices>
<StationFacilities>
<FirstClassLounge>
<com:Available>false</com:Available>
</FirstClassLounge>
<SeatedArea>
<com:Available>false</com:Available>
</SeatedArea>
<WaitingRoom>
<com:Available>false</com:Available>
</WaitingRoom>
<Trolleys>
<com:Available>false</com:Available>
</Trolleys>
<StationBuffet>
<com:Available>false</com:Available>
</StationBuffet>
<Toilets>
<com:Available>false</com:Available>
</Toilets>
<BabyChange>
<com:Available>false</com:Available>
</BabyChange>
<Showers>
<com:Available>false</com:Available>
</Showers>
<Telephones>
<com:Exists>true</com:Exists>
<com:UsageType>CardsAndCoins</com:UsageType>
</Telephones>
<WiFi>
<com:Annotation>
<com:Note>
<![CDATA[ <p><a href="https://www.btwifi.co.uk/find/" target="_blank" rel="nofollow">Find WiFi Hotspots around Aber station</a></p> ]]>
</com:Note>
</com:Annotation>
<com:Available>false</com:Available>
</WiFi>
<WebKiosk>
<com:Available>false</com:Available>
</WebKiosk>
<PostBox>
<com:Available>false</com:Available>
</PostBox>
<TouristInformation>
<com:Available>false</com:Available>
</TouristInformation>
<AtmMachine>
<com:Available>false</com:Available>
</AtmMachine>
<BureauDeChange>
<com:Available>false</com:Available>
</BureauDeChange>
<Shops>
<com:Available>false</com:Available>
</Shops>
</StationFacilities>
<Accessibility>
<Helpline>
<com:ContactDetails>
<com:Annotation>
<com:Note>
<![CDATA[ 03333 211202 ]]>
</com:Note>
</com:Annotation>
<com:Url>https://www.nationalrail.co.uk/</com:Url>
</com:ContactDetails>
<com:Open>
<com:DayAndTimeAvailability>
<com:DayTypes>
<com:MondayToSunday>true</com:MondayToSunday>
</com:DayTypes>
<com:OpeningHours>
<com:OpenPeriod>
<com:StartTime>08:00:00.000</com:StartTime>
<com:EndTime>20:00:00.000</com:EndTime>
</com:OpenPeriod>
</com:OpeningHours>
</com:DayAndTimeAvailability>
</com:Open>
</Helpline>
<StaffHelpAvailable>
<com:Annotation>
<com:Note>
<![CDATA[ <span style="font-size: 16px;"><span style="font-size: 14px;"><span style="font-size: 12px;">No platform staff available. Assistance is provided by the Conductor on the train.</span></span></span> ]]>
</com:Note>
</com:Annotation>
<com:Available>true</com:Available>
</StaffHelpAvailable>
<InductionLoop>true</InductionLoop>
<AccessibleTicketMachines>
<com:Annotation>
<com:Note>
<![CDATA[ <p>The ticket machine takes debit and credit cards only. </p> ]]>
</com:Note>
</com:Annotation>
<com:Available>true</com:Available>
</AccessibleTicketMachines>
<HeightAdjustedTicketOfficeCounter>
<com:Available>true</com:Available>
</HeightAdjustedTicketOfficeCounter>
<RampForTrainAccess>
<com:Available>true</com:Available>
</RampForTrainAccess>
<NearestStationsWithMoreFacilities>
<com:CrsCode>ECP</com:CrsCode>
<com:CrsCode>YSM</com:CrsCode>
</NearestStationsWithMoreFacilities>
<NationalKeyToilets>
<com:Available>false</com:Available>
</NationalKeyToilets>
<StepFreeAccess>
<com:Annotation>
<com:Note>
<![CDATA[ <p><span style="font-size:16px"><span style="font-size:16px"><span style="font-size:14px"><span style="font-size:12px">Category B1</span></span></span></span></p> <p><span style="font-size:16px"><span style="font-size:16px"><span style="font-size:14px"><span style="font-size:12px">Wheelchair users, mobility scooter users and customers with reduced mobility may find the steep ramps leading from Nantgarw Road to both platforms difficult to negotiate.</span></span></span></span></p> <p><span style="font-size:16px"><span style="font-size:16px"><span style="font-size:14px"><span style="font-size:12px"><span style="font-size:12pt; line-height:107%"><span style="font-size:12px">Find out more information here&nbsp;</span></span><a href="https://tfwrail.wales/before-your-journey/accessible-travel/station-accessibility" originalattribute="href" originalpath="https://tfwrail.wales/before-your-journey/accessible-travel/station-accessibility"><span style="font-size:12pt; line-height:107%"><span style="font-size:12px">https://tfwrail.wales/before-your-journey/accessible-travel/station-accessibility</span></span></a> </span></span></span></span></p> <p>&nbsp;</p> ]]>
</com:Note>
</com:Annotation>
<Coverage>wholeStation</Coverage>
</StepFreeAccess>
<ImpairedMobilitySetDown>
<com:Available>false</com:Available>
</ImpairedMobilitySetDown>
<WheelchairsAvailable>
<com:Available>false</com:Available>
</WheelchairsAvailable>
</Accessibility>
<Interchange>
<CycleStorage>
<Spaces>0</Spaces>
<Sheltered>No</Sheltered>
<Cctv>true</Cctv>
</CycleStorage>
<CarPark>
<com:ContactDetails>
<com:PostalAddress>
<add:Line>-</add:Line>
<add:Line>-</add:Line>
</com:PostalAddress>
<com:Url>https://www.nationalrail.co.uk/</com:Url>
</com:ContactDetails>
<com:Open>
<com:DayAndTimeAvailability>
<com:DayTypes>
<com:MondayToFriday>true</com:MondayToFriday>
</com:DayTypes>
<com:OpeningHours>
<com:TwentyFourHours>true</com:TwentyFourHours>
</com:OpeningHours>
</com:DayAndTimeAvailability>
</com:Open>
<com:OperatorName>
<![CDATA[ Local Authority ]]>
</com:OperatorName>
<Name>
<![CDATA[ Station Car Park ]]>
</Name>
<Spaces>128</Spaces>
<Charges>
<Free>true</Free>
</Charges>
<NumberAccessibleSpaces>0</NumberAccessibleSpaces>
<AccessibleCarParkEquipment>true</AccessibleCarParkEquipment>
<Cctv>false</Cctv>
</CarPark>
<RailReplacementServices>
<com:Annotation>
<com:Note>
<![CDATA[ Use the bus stops under the bridge on Nantgarw Road ]]>
</com:Note>
</com:Annotation>
</RailReplacementServices>
<TaxiRank>
<com:Annotation>
<com:Note>
<![CDATA[ <p>There is no taxi rank at this station. </p> ]]>
</com:Note>
</com:Annotation>
</TaxiRank>
</Interchange>
<StationAlerts>
<AlertText>
<![CDATA[ <div style="border: 0px none currentcolor; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; margin: 0px; padding: 0px; vertical-align: baseline;"> <p class="x_MsoNormal" style="font-size: 11pt; margin: 0cm 0cm 0pt;"><span style="border: 0px none currentcolor; font-size: 12pt; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin: 0px; padding: 0px; vertical-align: baseline;">13 April 2020</span></p> <p class="x_MsoNormal" style="font-size: 11pt; margin: 0cm 0cm 0pt;"><span style="border: 0px none currentcolor; font-size: 12pt; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin: 0px; padding: 0px; vertical-align: baseline;"><br /> </span></p> <p class="x_MsoNormal" style="font-size: 11pt; margin: 0cm 0cm 0pt;"><span style="border: 0px none currentcolor; font-size: 12pt; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin: 0px; padding: 0px; vertical-align: baseline;">This ticket office is closed permanently.</span><span style="border: 0px none currentcolor; font-size: 12pt; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin: 0px; padding: 0px; vertical-align: baseline;"></span></p> </div> <span style="font-size: 15px; font-variant-numeric: normal; font-variant-east-asian: normal;"> </span> <p><span style="font-size: 12pt; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; font-weight: inherit;">To purchase a ticket, download our app TfW Rail or buy online at tfwrail.wales</span> </p> ]]>
</AlertText>
</StationAlerts>
<TrainOperatingCompanies>
<TocRef>AW</TocRef>
</TrainOperatingCompanies>
</Station>
</StationList>`;

var result1 = convert.xml2js(
  xml, 
  {
      compact: true,
      ignoreComment: true, 
      ignoreDoctype: true, 
      instructionHasAttributes: true,
      ignoreAttributes: true,
      ignoreDeclaration: true,
      ignoreInstruction: true,
      alwaysArray: true
  });
  const arr = handlerStation(result1)

  return response(res).success({
    stations: arr
});
};

export default test;
