import './SearchHeader.css'

type Props = {}

const SearchHeader = (props: Props) => {
    return (
        <div className="d6">
            <form>
                <input type="text" placeholder="Шукай тут..." />

                <button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                    >
                        <path
                            d="M29.4 31.5L19.95 22.05C19.2 22.65 18.3375 23.125 17.3625 23.475C16.3875 23.825 15.35 24 14.25 24C11.525 24 9.219 23.0565 7.332 21.1695C5.444 19.2815 4.5 16.975 4.5 14.25C4.5 11.525 5.444 9.2185 7.332 7.3305C9.219 5.4435 11.525 4.5 14.25 4.5C16.975 4.5 19.2815 5.4435 21.1695 7.3305C23.0565 9.2185 24 11.525 24 14.25C24 15.35 23.825 16.3875 23.475 17.3625C23.125 18.3375 22.65 19.2 22.05 19.95L31.5 29.4L29.4 31.5ZM14.25 21C16.125 21 17.719 20.344 19.032 19.032C20.344 17.719 21 16.125 21 14.25C21 12.375 20.344 10.781 19.032 9.468C17.719 8.156 16.125 7.5 14.25 7.5C12.375 7.5 10.781 8.156 9.468 9.468C8.156 10.781 7.5 12.375 7.5 14.25C7.5 16.125 8.156 17.719 9.468 19.032C10.781 20.344 12.375 21 14.25 21Z"
                            fill="white"
                        />
                    </svg>
                </button>
            </form>
        </div>
    )
}
export default SearchHeader
