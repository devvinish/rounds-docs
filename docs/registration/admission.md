# I.P. Admission

Admit a registered patient to a ward and a bed. The admission gets an **I.P. No.** (in-patient number).
The ward charges, the bills of the stay, the ward chart and the final bill all follow that number.

!!! note "Register first"
    Only a registered patient can be admitted. A new patient is first registered with
    [New O.P. Registration](op-registration.md), or with the quick registration of
    [Find Patient](find-patient.md#quick-registration-of-a-walk-in) in an emergency.

## Admit a patient

The quickest way: find the patient in [Find Patient](find-patient.md) and click **Admit**. The admission
form opens with <span class="n">1</span> the patient and <span class="n">2</span> the doctor the patient is
registered with already filled in:

![A new admission opened from Find Patient](../assets/screens/registration/ip-from-find.png)

Or open **Registration > I.P. Admission** and choose the patient yourself:

![An empty admission form](../assets/screens/registration/ip-new.png)

1. <span class="n">1</span> Type the **Mobile No.** and press ++tab++, or search the **C.R. / O.P. No.**
   The patient's name, age and sex appear.
2. Check the **Admission Date** (today by default).
3. <span class="n">2</span> **Ward**: the list shows the rate a day and the range of bed numbers of every
   ward.
4. <span class="n">3</span> **Bed No.**: choose from the list. It holds only the **free beds** of the ward
   chosen (and a bed kept for this patient, marked *kept for this patient*), so a bed cannot be typed wrong
   or given to two patients. The [Bed Board](beds.md) shows every bed of every ward.
5. **Category**, **Empanelment** (the insurer, TPA or company that pays, or SELF) and **Doctor**. For an
   insurer, the [Insurance](#an-insured-patient) part of the form opens below.
6. **Diagnosis**: the reason for admission.
7. <span class="n">4</span> **Package / Scheme**: for a package such as a normal delivery, choose it here.
   **Package Price for This Patient** starts at the package's price and can be changed. The I.P. final bill
   then charges the package instead of the items it includes.
8. <span class="n">5</span> **Referred By**: the clinic or doctor who sent the patient.
9. Click **Save**. The admission gets its **I.P. No.**

Next, take an advance from the patient in **Finance > Advance Receipts**.

## An insured patient

When the **Empanelment** is an insurer, a TPA or a scheme (anything but SELF), the form shows
**Insurance**:

![The insurance part of an admission](../assets/screens/registration/ip-insurance.png)

- **The Insurer**: a warning appears at once if the insurer is marked inactive, or its contract (in
  **Masters > Empanelled Companies**) has ended or not yet started.
- **Claim**: its number and where it stands. **Open the Claim** opens it in
  [Insurance Claims](../finance/insurance.md#insurance-claims).
- **TPA**, **Policy No.**, **Member / Card No.** and **Policy Holder**, from the patient's card.
- **Co-payment (%)**: the share of the bill the policy leaves to the patient, if it has one.
- **Room Rent Allowed a Day**: the room rent the policy pays a day, if it has a limit. A dearer ward's
  difference is then the patient's.

**Save** opens the claim of the admission by itself, with these details. If a claim was already opened
for this patient before the admission (a [planned operation](../finance/insurance.md#before-the-admission)),
that claim is joined to the admission instead, with everything it already has.

The co-payment, the room-rent limit and the approved amount are what the
[I.P. final bill](../finance/inpatient-billing.md#an-insured-patients-bill) uses to divide the bill
between the insurer and the patient.

## An admission in progress

Open **Registration > I.P. Patients** and click the pencil of the patient:

![The list of admitted patients](../assets/screens/registration/ip-list.png)

![An admission with its bed history, charges and transfer](../assets/screens/registration/ip-open.png)

- <span class="n">1</span> **What needs attention** on an insured admission, in yellow at the top:
    - the pre-authorisation not sent yet;
    - waiting for the insurer, and for how many days;
    - a query from the insurer to answer;
    - a refusal;
    - room charges so far that are already more than the amount approved;
    - an insurer whose contract has ended or that is inactive.
- <span class="n">2</span> **Insurance**: the claim and the policy (above).
- <span class="n">3</span> **Ward / Bed History**: every ward and bed the patient has been in, from which
  day, and who moved them.
- <span class="n">4</span> **Room Charges So Far**: the days in each ward and bed at its daily rate, up to
  today. **Here now** marks the current bed.
- <span class="n">5</span> **Transfer to Another Ward / Bed**: see below.
- <span class="n">6</span> **I.P. Final Bill**: opens the final bill of this admission in Finance.
  Saving the final bill discharges the patient.
- <span class="n">7</span> **Forms**: prints a consent, a referral letter or another form for this
  patient, filled in with the admission's details (see Clinical > Consents and Forms).
- **Print** prints the admission slip.

### Transfer to another ward or bed

1. In **Transfer to Another Ward / Bed**, choose the **New Ward**, then the **Bed No.** from its free beds.
2. Check the **Transfer Date**. **At** is the time (HH:MM); leave it empty for now.
3. Click **Transfer**.

The move is added to the bed history. The room charges count the old bed up to the move and the new one
from then on.

### Discharge

The usual way is the **I.P. Final Bill**: saving it discharges the patient. To record a discharge
without a bill (for example, a patient who left against advice), fill in **Discharge** and **Save**:

- **Discharge Date**;
- **Remark**: Discharged, LAMA (left against medical advice), Referred, Absconded, Expired or DOPR.

!!! question "Something went wrong?"
    - *The bed I want is not in the list*: somebody is in it, or it is kept for somebody else. The
      [Bed Board](beds.md) shows who; release a reservation there if it is no longer needed.
    - *"Bed ... has ... in it"* on saving: another desk gave that bed a moment earlier. Choose another.
    - *The doctor is empty*: the patient's registration has no doctor. Choose one; the patient's next
      screens will then suggest it.
