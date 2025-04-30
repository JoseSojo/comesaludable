import { FC } from "react";
import UpdatePassword from "./UpdatePassword";

interface Props { }

const SettingsUser: FC<Props> = () => {

    return (
        <div className="card bg-white shadow-xl">
            <div className="card-body">
                <h2 className="card-title mb-6">Configuraciones</h2>

                <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-base-100 rounde d-lg">
                        <div>
                            <h3 className="font-medium">Email Notifications</h3>
                            <p className="text-sm text-gray-600">Receive emails about your activity</p>
                        </div>
                        <input type="checkbox" className="toggle toggle-primary" checked />
                    </div>

                    <div className="flex items-center justify-between p-4 bg-base-100 rounded-lg">
                        <div>
                            <h3 className="font-medium">Delete Account</h3>
                            <p className="text-sm text-gray-600">Permanently delete your account</p>
                        </div>
                        <button className="btn btn-error btn-sm">Delete</button>
                    </div>

                    <div className="divider-horizontal"></div>

                    <UpdatePassword />
                </div>
            </div>
        </div>
    )
}

export default SettingsUser;
