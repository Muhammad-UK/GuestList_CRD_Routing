export type GuestsData = {
    id: number,
    name: string,
    email: string,
    phone: string
}
export type GuestsProps = {
    guests: GuestsData[];
    deleteGuest: (guest: GuestsData) => void;
}
export type CreatedGuestData = {
    name: string,
    email: string,
    phone: string
}
export type CreateGuestProps = {
    createGuest: (guest: CreatedGuestData) => void;
}
export type GuestDetailProps = {
    guests: GuestsData[];
}