import { get } from "src/Store/locale";
import Config from 'react-native-config';

const code_mode = Config.REACT_APP_CODE_MODE;
export const get_data = () => {
    return {
        company_address: "",
        cndp_declaration_number: "",
        company_capital: "",
        company_legal_status: "",
        company_name: "",
        responsable_address: "",
        responsable_full_name: "",
        site_name: get("general_information") && get("general_information").site_name ? get("general_information").site_name : "HealthKools",
        site_url: code_mode === "prod" ? "" : code_mode === "preprod" ? "" : code_mode === "server_dev" ? "" : "http://localhost:3000",
    };
}
