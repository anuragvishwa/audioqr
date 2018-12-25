// import * as React from "react";
// import { SoundEntity } from "../../model";
// import { Input, Button } from "../../common/components/form";

// interface Props {
//   sound: SoundEntity;
//   onChange: (fieldName: string, value: string) => void;
//   onSave: () => void;
// }

// export const MemberForm: React.StatelessComponent<Props> = props => {
//   return (
//     <form>
//       <h1>Manage member : {this.props.sound.memberId}</h1>

//       <Input
//         name="login"
//         label="Login"
//         value={props.member.login}
//         onChange={props.onChange}
//         error={
//           props.memberErrors.login.succeeded
//             ? ""
//             : props.memberErrors.login.errorMessage
//         }
//       />

//       <Input
//         name="avatar_url"
//         label="Avatar Url"
//         value={props.member.avatar_url}
//         onChange={props.onChange}
//       />

//       <Button label="Save" className="btn btn-default" onClick={props.onSave} />
//     </form>
//   );
// };
