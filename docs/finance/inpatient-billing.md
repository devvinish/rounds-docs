# In-Patient Billing and Dues

The money of an admission, in order:

1. **advances** while the patient is in the ward;
2. **credit bills** for tests and services during the stay;
3. the **I.P. final bill** at discharge, which takes the advances off;
4. **payments** against what is still due.

## Advance receipts

**Finance > Advance Receipts** lists the advances; **New Advance** takes one.

1. The **Date**. Type the **Mobile No.** and press ++tab++, or search the **I.P. No.** The C.R. No. and the
   patient fill in.
2. **Amount**, and **Towards**: e.g. *advance at admission*.
3. **Paid By**, with the transaction ID. For a cheque or draft, give the **Bank**.
4. **Save Receipt** and **Print** the receipt.

![An advance receipt](../assets/screens/finance/advance-open.png)

![The list of advance receipts](../assets/screens/finance/advance-list.png)

## I.P. final bill

Open the patient's admission and click **I.P. Final Bill**, or open **Finance > I.P. Final Bills** and
**New I.P. Bill**.

![An I.P. final bill](../assets/screens/finance/ipbill-open.png)

1. <span class="n">1</span> **Patient**: choose the **I.P. No.** (or type the mobile number) and the
   **Bill / Discharge Date**. Click **Prepare Bill**. It shows:
    - the ward, bed and admission date;
    - the **Advance Paid** and the numbers of the **Advance Receipts**;
    - the **Package / Scheme**, if the admission has one.
2. **Prepare Bill** also writes the **ward charges** from the bed history: every ward and bed, from and to,
   at its daily rate.
3. <span class="n">2</span> **Add Charges**: choose an **I.P. Bill Item** (from Masters > I.P. Bill Items),
   or write an **Other Item**. Give the **Rate** and **Qty**, then **Add Charge**. Use this for the surgeon's
   fee, the operation theatre, medicines, nursing and so on.
4. **Apply the Package**, for an admission on a package: the charges the package includes are replaced by
   the package price. Charges outside the package stay on the bill.
5. <span class="n">3</span> **Charges** lists every line. The bin icon removes one.
6. <span class="n">4</span> **Settlement**:
    - **Total Charges**;
    - **Less: Refund** and **Less: Concession**: what is taken off;
    - **Net Payable (after advance)**: what the patient still pays.
7. Click **Save Bill and Discharge**. The bill is saved and the patient is discharged. What is left to pay
   becomes a **due** of the patient.
8. **Print** the final bill.

!!! warning "A concession above your limit"
    A concession beyond the limit of your role needs approval first
    ([Discount Approvals](rates.md#discount-approvals)).

### An insured patient's bill

When the admission has an [insurance claim](insurance.md#insurance-claims), **Settlement** also divides
the bill between the insurer and the patient. The figures follow every charge added or removed:

![What the insurer and the patient pay](../assets/screens/finance/ipbill-split.png)

1. <span class="n">1</span> **The Insurer Pays**: the charges it covers, less the co-payment, and never
   more than the amount it approved.
2. <span class="n">2</span> **The Patient Pays (after advance)**: the rest, less the advance, the refund and
   the concession. If the advance was more than the patient's part, it reads *Nothing - Rs ... to be
   refunded*.
3. <span class="n">3</span> **How It Is Divided**:
    - **not covered**: charges on the list of [Items Insurers Do Not Pay](insurance.md#items-insurers-do-not-pay),
      e.g. attendant food or an admission kit;
    - **room rent above the limit**: for each day, what the ward's rate is above the **Room Rent Allowed a
      Day** of the policy;
    - **co-payment**: the policy's percentage of what is left.

    *Capped at the Rs ... approved* is added when the insurer's part is held to the approved amount.

**Insurance - Needs Attention** warns, for example, when the charges are already more than the amount
approved: ask the insurer for an enhancement before the patient leaves.

In the example: a bill of Rs 37,750. Rs 1,700 is not covered (attendant food and an admission kit). Rs 300
is room rent above the limit (three days in the ICU at Rs 350 against Rs 250 allowed). The 10% co-payment
is Rs 3,575. So the insurer pays Rs 32,175 and the patient Rs 5,575, less a Rs 575 concession.

Saving the bill keeps this division on the claim, and it becomes the amount claimed. From then on the
dues of the admission are in two parts. [Outstanding Dues](#outstanding-dues) shows the whole balance with
the **Insurer's Part** and the **Patient's Part** beside it, and
[Receivables Ageing](day-end.md#receivables-ageing) lists the two separately until each is paid.

![The list of I.P. final bills](../assets/screens/finance/ipbill-list.png)

## Outstanding dues

**Finance > Outstanding Dues** lists every admission that still owes money: the bill, what was paid, and
the balance. For an insured admission, **Insurer's Part** is what is still to come from the insurer, and
**Patient's Part** is what to ask the patient for.

![The outstanding dues](../assets/screens/finance/dues.png)

## Payments received

**Finance > Payments Received** lists the payments against dues. **Receive Payment** takes one:

1. Choose the patient by **Mobile No.** or **I.P. No.** **Balance Due** shows what is owed.
2. **Amount Received**, and a **Remark**. **Balance After Payment** shows what will be left.
3. **Paid By** and the transaction ID (**Bank** for a cheque).
4. **Save Receipt** and **Print**.

![A payment receipt](../assets/screens/finance/payment-open.png)

![The payments received](../assets/screens/finance/payments-list.png)

## Receive from a patient

**Finance > Receive from a Patient** takes one payment against **all** the dues of a patient, across bills
and admissions:

1. Type the **Mobile No.** and press ++tab++, or search the **Patient**. **Owes in All** shows the total, and
   **Dues of the Patient** lists each due.
2. **Amount Received**, the **Date**, a **Remark**, and **Paid By** (a UPI payment shows its QR code).
3. Click **Receive the Payment**. The amount is set against the oldest admission first, with one receipt
   for each admission it reaches. **Latest Receipts of
   the Patient** shows the receipts made.

![Receiving a payment from a patient](../assets/screens/finance/receive.png)
