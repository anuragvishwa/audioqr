// import * as React from "react";
// import * as quiet from "../../../../../quiet/lib/quiet";
// import * as receiveText from "../../../../../quiet/lib/receivetext";
// import * as sendText from "../../../../../quiet/lib/sendtext";
// import * as quietems from "../../../../../quiet/lib/quiet-emscripten";
// import { SoundEntity } from "../../model";
// import { Input, Button } from "../../common/components/form";

// interface Props {
//   sound: SoundEntity;
//   onChange: (fieldName: string, value: string) => void;
//   onSave: () => void;
// }

// export const MemberForm: React.StatelessComponent<Props> = props => {
//   return (
//     <div>
//       <div className="hidden" data-quiet-profile-name="audible" />
//       <div className="wrapper">
//         <header>
//           <h1>Receive Text</h1>
//         </header>
//         <section>
//           <div className="hidden" data-quiet-warning />
//           <pre data-quiet-receive-text-target>
//             Your received text will show up here. Waiting...
//           </pre>
//         </section>
//         <header>
//           <h1>Send Text</h1>
//         </header>
//         <section>
//           <div className="hidden" data-quiet-warning />
//           <div className="form-group">
//             <textarea
//               autofocus="true"
//               autocapitalize="none"
//               autocomplete="off"
//               spellcheck="off"
//               class="form-control"
//               style="resize:none"
//               rows="5"
//               data-quiet-text-input
//             />
//           </div>
//           <button
//             type="button"
//             class="btn btn-default"
//             style="width:100%"
//             data-quiet-send-button
//             data-quiet-sending-text="Sending..."
//           >
//             Send
//           </button>
//         </section>
//       </div>
//     </div>
//   );
// };
