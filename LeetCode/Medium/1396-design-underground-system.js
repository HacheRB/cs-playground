// https://leetcode.com/problems/design-underground-system/

// Solution #1
// Time Complexity O()
// Space Complexity O()

var UndergroundSystem = function () {
	this.checkins = new Map()
	this.routes = new Map()
}

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
	this.checkins.set(id, [stationName, t])
}

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
	let [checkInStation, startTime] = this.checkins.get(id)
	let route = `${checkInStation},${stationName}`
	this.checkins.delete(id)

	if (!this.routes.has(route)) {
		this.routes.set(route, new Uint32Array(2))
	}
	let journey = this.routes.get(route)
	;(journey[0] += t - startTime), journey[1]++
}

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (
	startStation,
	endStation,
) {
	let [sum, count] = this.routes.get(`${startStation},${endStation}`)
	return sum / count
}

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
