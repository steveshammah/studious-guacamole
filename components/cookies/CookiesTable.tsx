import {
  Stack,
  StackDivider,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { parseCookies } from "nookies";

export const CookiesTable = () => {
  const sessionCookies = parseCookies();
  const cookies = Object.entries(sessionCookies);

  return (
    <Stack spacing={"2rem"}>
      <StackDivider />
      <TableContainer>
        <Table size="lg">
          <Thead>
            <Tr>
              <Th>Cookie</Th>
              <Th>Description</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cookies.map((cookie, index) => {
              return (
                <Tr key={cookie[index] + index}>
                  <Td>{cookie[0]}</Td>
                  <Td>{cookie[1]}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <StackDivider />
    </Stack>
  );
};
