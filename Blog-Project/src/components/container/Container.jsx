
//container accepts the property as their children
//basically ek box hai jiske andar styling property hoti hai jo as it is chali jati h

function Container({children}) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
        {children}
    </div>
  )
}

export default Container