# FAQ

## Patients

??? question "The patient is registered, but I cannot find them."
    Search by name in [Find Patient](registration/find-patient.md): the patient may have given another
    mobile number before. Once found, renew their visit; the new number is recorded.

??? question "Two members of a family share one phone. Is that a problem?"
    No. Patients with the same mobile number are a **family**: typing the number lists them all, and you
    choose the one who has come. **Same Family** on a new registration copies the address.

??? question "A patient was registered twice by mistake."
    Keep the older registration, and use its C.R. No. from now on. An administrator can correct or cancel
    the newer one.

??? question "Why is the Doctor already filled in?"
    Every screen suggests the doctor the patient is registered with, or the doctor of the current
    admission. Change it if the patient is seeing someone else.

## Payments

??? question "No UPI QR code appears."
    - The hospital's **UPI ID** must be set in
      [Hospital Details](administration/settings.md#hospital-details).
    - The amount must be more than zero.
    - **Paid By** must be **UPI / QR code**.

??? question "The patient paid part in cash and part by UPI."
    Turn **Paid in Two Ways** to **Yes**, and give the second mode and its amount. See
    [Paid in two ways](registration/op-registration.md#paid-in-two-ways).

??? question "The bill says the discount is waiting for approval."
    The discount is above the limit of your role. Someone allowed to approve it does so in
    [Discount Approvals](finance/rates.md#discount-approvals). Then save the bill again, the same day.

??? question "The cash counted does not match at the end of the day."
    Look at **Documents of the Day** on the [Day-End Closing](finance/day-end.md#day-end-closing): each
    document shows how it was paid. A payment recorded as cash but taken by UPI (or the other way) is the
    usual cause. Write the reason in **Remarks** before closing.

??? question "The bed I want is not in the Bed No. list."
    Somebody is in it, or it is kept for somebody else. Look at the [Bed Board](registration/beds.md): it
    shows who is in each bed and which are kept. Release a reservation there if it is no longer needed.

??? question "Why does an insured patient still have something to pay?"
    The final bill leaves to the patient what the insurer does not pay: the
    [items insurers do not pay](finance/insurance.md#items-insurers-do-not-pay), the room rent above what the
    policy allows a day, the co-payment, and anything above the amount approved.
    **How It Is Divided** on the [final bill](finance/inpatient-billing.md#an-insured-patients-bill) shows
    each part.

## Laboratory

??? question "A lab order shows 'Not billed' in red."
    Its tests are not on any bill. Click **Bill the Tests**: the cash bill opens with them.

??? question "A result is marked 'Critically high'."
    The value is past the critical limit set in [Normal Ranges](investigation/lab-settings.md#normal-ranges).
    It stays on the Home page until the report is verified. Inform the doctor at once.

??? question "The sample was clotted or not labelled."
    [Reject](investigation/laboratory.md#receive-samples) it with the reason. The tests go back to **To
    collect**, and a new sample is taken.

## Staff and payroll

??? question "I cannot see the H.R.M.S. menu."
    Your role does not open it. An administrator ticks **H.R.M.S.** in your role's **Menus the role opens**
    ([Roles](administration/users.md#roles)). Salary Structure, Run Payroll and the two settings pages
    are for administrators only.

??? question "Work Out the Month says the month is locked."
    A locked month is final. Click **Open It Again**, correct what is wrong, work it out and lock it again
    ([Run Payroll](hrms/payroll.md#locking-and-opening-again)). If the salaries are already recorded as
    paid, take the payment back first.

??? question "Leave is refused: only so many days are left."
    More was asked for than will have built up by the first day of the leave. Ask for the days that are
    left, and the rest as **Leave without pay** ([Leave](hrms/leave.md#ask-for-leave)).

??? question "Somebody who came a few minutes late was counted half a day."
    The full day of their shift is too long. Set **A Full Day Is** a little under the length of the
    shift, e.g. 420 minutes for eight hours ([Shifts](hrms/setup.md#shifts)).

??? question "The machine's times do not reach an employee."
    Their **Machine No.** is missing or different. Fill it in on the
    [employee](hrms/employees.md#attendance-and-the-usual-week), then click **Work Out the Days** on
    [Load from the Machine](hrms/roster-attendance.md#load-from-the-machine).

## WhatsApp and printing

??? question "Does the hospital need a WhatsApp Business account?"
    No. The **WhatsApp** button opens WhatsApp on the computer or phone you are using, with the patient's
    number and the message typed in; you press Send. There is no charge. The words are in
    [Message Templates](masters/messages.md).

??? question "How do I send the report or bill itself as a PDF?"
    In the print window, **Share** sends the PDF from a phone or tablet. On a computer, **Print** and choose
    *Save as PDF*, then attach the file in WhatsApp.

??? question "The printed documents show the wrong hospital name or address."
    They come from [Hospital Details](administration/settings.md#hospital-details).

## Signing in

??? question "I forgot my password, or I am locked out."
    Ask the administrator: they set a new password (and **Unlock** after 5 wrong tries) in
    [Application Users](administration/users.md#application-users). You then choose your own at the next
    sign-in.

??? question "I cannot see a menu my colleague sees."
    Menus follow the **role**. The administrator changes it in
    [Roles](administration/users.md#roles) or on your user.
