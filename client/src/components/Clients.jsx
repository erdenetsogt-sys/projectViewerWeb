import { useQuery } from "@apollo/client";
import ClientRow from "./ClientRow";
import { GET_CLIENTS } from "../queries/clientQueries";
import Spinner from "./Spinner";

export default function Clients() {
  const { loading, error, data } = useQuery(GET_CLIENTS);
  if (loading) return <Spinner />;
  if (error) return <p>error...</p>;

  return (
    <>
      {!loading && !error && (
        <table className="table table-hover mt-3">
          <trhead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </trhead>
          <tbody>
            {data.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
