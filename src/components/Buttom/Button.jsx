export default function Button({children, isActive, ...props}) {
    return( 
        <button 
            {...props}
        >
            {children}
        </button>
    )
}