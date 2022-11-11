function solve () {
	const span = document.querySelector("#info > span");
	const depatBtn = document.querySelector("#depart");
	const arriveBtn = document.querySelector("#arrive");
	let nextStopName = 'depot'

	async function getStop () {
		try {
			const stop = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStopName}`)
			
			return await stop.json()
		} catch (e) {
			span = 'Error'
			arriveBtn = true
			depatBtn = true
		}
	}

	async function depart () {
		debugger
		depatBtn.disabled = true
		arriveBtn.disabled = false
		nextStopName = await getStop(nextStopName)
		span.textContent = `Next stop ${nextStopName.name}`
	}

	async function arrive () {
		debugger
		depatBtn.disabled = false
		arriveBtn.disabled = true
		// nextStopName = await getStop(nextStopName)
		span.textContent = `Arriving at ${nextStopName.name}`
		nextStopName = nextStopName.next;
	}

	return {
		depart,
		arrive
	}
}

let result = solve()