export type LoginStatus = 'signed-out' | 'signing-in' | 'signed-in';
export interface UserAccessGooritaServiceModel {
  result: UserAccessGoorita;
}
export interface UserAccessGoorita {
  name?: string;
}
export class LoginStateModelGoorita {
  inputUsername: string;
  inputPassword: string;
  submittedLogin: SubmittedLoginGoorita;
  loggedUser: UserGoorita;
  loginStatus: LoginStatus;
  userAccess: UserAccessGoorita;
}
export interface SubmittedLoginGoorita {
  username: string;
  password: string;
}
export interface LoginServiceParamGoorita {
  username: string;
  password: string;
}
export interface UserGoorita {
  id?: number;
  login?: string;
  loginLowerCased?: string;
  email?: string;
  password?: string;
  token?: string;
  privilege?: string;
  lastaccess?: string;
}

// export class LoginStateModel {
//   inputUsername: string;
//   inputPassword: string;
//   submittedLogin: SubmittedLogin;
//   loggedUser: User;
//   userAccess: UserAccess;
//   loginStatus: LoginStatus;
// }

// export type anu = any;

// export interface SubmittedLogin {
//   username: string;
//   password: string;
// }

// export interface LoginServiceParam {
//   login: string;
//   password: string;
// }

// export interface UserAccessServiceModel {
//   result: UserAccess;
// }

// export interface UserAccess {
//   region?: string;
//   coordinate?: Coordinate;
//   name?: string;
//   regionId?: number;
//   counterId?: number[];
// }


// export interface Coordinate {
//   lat: number;
//   lon: number;
// }

// export interface User {
//   id?: number;
//   login?: string;
//   loginLowerCased?: string;
//   email?: string;
//   password?: string;
//   salt?: string;
//   token?: string;
//   role?: {
//     name?: string
//   };
//   groupId?: number;
//   group?: UserGroup;
//   privilege?: string;
//   lastaccess?: string;
//   config?: UserConfig; //Various custom user config here
// }

// export interface UserGroup{
//   id: number;
//   name: string;
//   region: string;
//   param: string;
//   editor: string;
//   description: string;
// }

// export interface UserConfig {
//   custom_layer_filter? : any;
//   custom_layer_filter_table_names?: string; //string splitted by comma
//   custom_layer_filter_identifiers?: string; //string splitted by comma
//   custom_layer_filter_datatype?: string; //string splitted by comma
//   custom_layer_filter_operators?: string; //String splitted by ; per identifier and ^ per column operators | per row, every operator is string of == or != or > or <
//   custom_layer_filter_values?: string; //String splitted by ; per identifier and ^ per column value | per row

//   standard_counter_config_mode?: CounterConfigModes;
//   standard_counter_config_selected_counters?: Array<any>;
//   standard_counter_config_categories?: any;

//   pacman_counter_config_mode?: CounterConfigModes;
//   pacman_counter_config_selected_counters?: Array<any>;

//   poi_editor_region_name?: 'WESTERN JABOTABEK' | 'EASTERN JABOTABEK' | 'CENTRAL JABOTABEK' | string;
// }

// export type CounterConfigModes = 'default' | 'partial' | 'partial_add' | 'partial_subtract' | 'enabled' | 'disabled';

