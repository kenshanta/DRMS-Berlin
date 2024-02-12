import { Box, Text } from "@chakra-ui/react";

interface PrivacyAndPolicyProps {
  isHidden: boolean;
}
const PrivacyAndPolicy: React.FC<PrivacyAndPolicyProps> = ({ isHidden }) => {
  return (
    <Box
      hidden={isHidden}
      padding={{
        base: "49% 1.9rem 0  1.9rem",
        sm: "35rem 3.5rem 0  3.5rem",
        md: "10rem 7rem 0rem 7rem",
        lg: "6rem 10rem 0 10rem",
        xl: "15rem 23.5rem 0 23.5rem",
        "2xl": "6rem 31rem 0 31rem",
      }}
    >
      <Text fontWeight="bold">
        Google Maps General <b>Privacy and Policy</b> of Work2gether UC - May
        2024
      </Text>

      <section>
        <Text fontWeight="bold">Scope and Reservation of Changes</Text>
        <ul>
          <li>
            <Text>
              These general terms and conditions (AGB) apply to every legal
              transaction between work2gether (FW) and the client (AG).
            </Text>
          </li>
          <li>
            <Text>
              Other agreements or arrangements are only valid if expressly
              agreed and confirmed in writing with FW.
            </Text>
          </li>
          <li>
            <Text>
              FW provides personnel under temporary employment contracts and
              reserves the right to change terms and conditions for future
              business relationships.
            </Text>
          </li>
        </ul>
      </section>

      <section>
        <Text fontWeight="bold">
          Principle of Equality and Maximum Duration of Release
        </Text>
        <ul>
          <li>
            <Text>
              The AG must immediately check the employment status of temporary
              workers and provide relevant information.
            </Text>
          </li>
          <li>
            <Text>
              Compliance with maximum duration of transfer is monitored, with
              provisions for adjustment of hourly rates.
            </Text>
          </li>
          <li>
            <Text>
              The AG must ensure adherence to maximum release periods and inform
              FW of any impending industrial actions.
            </Text>
          </li>
        </ul>
      </section>
      <section>
        <Text fontWeight="bold">
          Minimum Duty Periods, Surcharges, and Billing
        </Text>
        <ul>
          <li>
            <Text>
              Minimum operating times are specified for different staff
              categories.
            </Text>
          </li>
          <li>
            <Text>
              Billing is based on actual hours worked, with quarterly invoicing
              and surcharges for public holidays.
            </Text>
          </li>
        </ul>
      </section>
    </Box>
  );
};

export default PrivacyAndPolicy;
