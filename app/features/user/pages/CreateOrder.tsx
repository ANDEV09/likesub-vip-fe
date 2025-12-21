import UserSubHeader from "../layout/UserSubHeader";

function CreateOrder() {
    const titlePage = "đặt hàng dịch vụ";

    return (
        <div>
            {/* Sub Header */}
            <UserSubHeader titlePage={titlePage} />

            {/* Main Content */}
            <div className="py-4 px-6">
                Service Pricing Page
            </div>
        </div>
    )
}

export default CreateOrder