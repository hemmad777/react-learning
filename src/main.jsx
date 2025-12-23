
import { createRoot } from "react-dom/client";

const myelement=(
  <table>
    <tr>
      <th>name</th>
    </tr>
    <tr>
      <td>jango</td>
    </tr>
    <tr>
      <td>nslin</td>
    </tr>
  </table>
);

createRoot(document.getElementById('sandy')).render(
  myelement
)