import UserSubHeader from "../layout/UserSubHeader"

function SupportRequestPage() {
    const titlePage = "yêu cầu hỗ trợ";

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

export default SupportRequestPage