// package com.example.demo.controller;

// public class BookingController {

// }
// package com.example.demo.controller;

// import com.example.demo.model.Booking;
// import com.example.demo.model.Room;
// import com.example.demo.repository.BookingRepository;
// import com.example.demo.repository.RoomRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;

// @CrossOrigin(origins = "http://localhost:5173")
// @RestController
// @RequestMapping("/api")
// public class BookingController {

//     @Autowired
//     private RoomRepository roomRepo;

//     @Autowired
//     private BookingRepository bookingRepo;

//     @PostMapping("/rooms")
//     public Room createRoom(@RequestBody Room room) {
//         return roomRepo.save(room);
//     }

//     @GetMapping("/rooms")
//     public List<Room> getRooms() {
//         return roomRepo.findAll();
//     }

//     @PostMapping("/book")
//     public Booking bookRoom(@RequestParam Long roomId,
//             @RequestParam String name,
//             @RequestParam String date) {
//         Room room = roomRepo.findById(roomId).orElseThrow();
//         if (room.isBooked()) {
//             throw new RuntimeException("Room already booked!");
//         }

//         room.setBooked(true);
//         roomRepo.save(room);

//         Booking booking = new Booking();
//         booking.setRoom(room);
//         booking.setCustomerName(name);
//         booking.setBookingDate(date);

//         return bookingRepo.save(booking);
//     }

//     @GetMapping("/bookings")
//     public List<Booking> getBookings() {
//         return bookingRepo.findAll();
//     }
// }
// package com.example.demo.controller;

// import com.example.demo.model.Booking;
// import com.example.demo.model.Room;
// import com.example.demo.repository.BookingRepository;
// import com.example.demo.repository.RoomRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;
// import java.util.NoSuchElementException;

// @CrossOrigin(origins = "http://localhost:5173")
// @RestController
// @RequestMapping("/api")
// public class BookingController {

//     @Autowired
//     private RoomRepository roomRepo;

//     @Autowired
//     private BookingRepository bookingRepo;

//     // Create a new room
//     @PostMapping("/rooms")
//     public Room createRoom(@RequestBody Room room) {
//         return roomRepo.save(room);
//     }

//     // Get all rooms
//     @GetMapping("/rooms")
//     public List<Room> getRooms() {
//         return roomRepo.findAll();
//     }

//     // Book a room (Updated)
//     @PostMapping("/book")
//     public Booking bookRoom(@RequestBody Booking bookingRequest) {
//         Room room = roomRepo.findById(bookingRequest.getRoom().getId())
//                 .orElseThrow(() -> new NoSuchElementException("Room not found"));

//         if (room.isBooked()) {
//             throw new RuntimeException("Room already booked!");
//         }

//         room.setBooked(true);
//         roomRepo.save(room);

//         Booking booking = new Booking();
//         booking.setRoom(room);
//         booking.setCustomerName(bookingRequest.getCustomerName());
//         booking.setBookingDate(bookingRequest.getBookingDate());

//         return bookingRepo.save(booking);
//     }

//     // Get all bookings
//     @GetMapping("/bookings")
//     public List<Booking> getBookings() {
//         return bookingRepo.findAll();
//     }
// }

package com.example.demo.controller;

import com.example.demo.model.Booking;
import com.example.demo.model.Room;
import com.example.demo.repository.BookingRepository;
import com.example.demo.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin(origins = "http://localhost:5174") // ALLOWS frontend to access backend
@RestController
@RequestMapping("/api")
public class BookingController {

    @Autowired
    private RoomRepository roomRepo;

    @Autowired
    private BookingRepository bookingRepo;

    // Create a new room
    @PostMapping("/rooms")
    public Room createRoom(@RequestBody Room room) {
        return roomRepo.save(room);
    }

    // Get all rooms
    @GetMapping("/rooms")
    public List<Room> getRooms() {
        return roomRepo.findAll();
    }

    // Book a room
    @PostMapping("/book")
    public Booking bookRoom(@RequestBody Booking bookingRequest) {
        // Ensure valid room ID is sent
        Room room = roomRepo.findById(bookingRequest.getRoom().getId())
                .orElseThrow(() -> new NoSuchElementException("Room not found"));

        // Check if already booked
        if (room.isBooked()) {
            throw new RuntimeException("Room already booked!");
        }

        room.setBooked(true); // mark room as booked
        roomRepo.save(room); // save updated room

        Booking booking = new Booking();
        booking.setRoom(room);
        booking.setCustomerName(bookingRequest.getCustomerName());
        booking.setBookingDate(bookingRequest.getBookingDate());

        return bookingRepo.save(booking); // save booking
    }

    // Get all bookings
    @GetMapping("/bookings")
    public List<Booking> getBookings() {
        return bookingRepo.findAll();
    }
}